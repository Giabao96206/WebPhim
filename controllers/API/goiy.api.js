const express = require("express");

const Fuse = require("fuse.js");
const cors = require("cors");
const app = express();

const os = require("os"); // Đảm bảo đã require 'os' module
const networkInterfaces = os.networkInterfaces();
function getLocalIP() {
  for (const interfaceName in networkInterfaces) {
    for (const iface of networkInterfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}
app.use(express.json()); // Middleware để parse JSON request body

app.use(cors({ origin: "*" }));

const {
  PhimLe,
  PhimBo,
  PhimVienTuong,
} = require("../../models/products.model");
const { connectdtb } = require("../../config/database.js");
connectdtb();
const fetchAPI = async (api) => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    return data?.items || data?.data?.items || data || [];
  } catch (error) {
    console.error(`Lỗi khi gọi API: ${api}`, error);
    return [];
  }
};
const timPhimFuzzy = async (tuKhoa, limit) => {
  const phimLe = await PhimLe.find();
  const phimBo = await PhimBo.find();
  const dsPhim = [...phimLe, ...phimBo];

  const options = {
    keys: ["name", "slug"],
    threshold: 0.4, // nhỏ hơn = chính xác hơn
  };

  const fuse = new Fuse(dsPhim, options);
  const ketQua = fuse.search(tuKhoa);

  // Giới hạn số lượng kết quả trả về
  return ketQua.slice(0, limit).map((kq) => ({
    name: kq.item.name,
    slug: kq.item.slug,
    poster_url: kq.item.poster_url,
  }));
};

const timPhimFuzzy2 = async (tuKhoa) => {
  const options = {
    keys: ["name", "slug", "origin_name"],
    threshold: 0.4, // nhỏ hơn = chính xác hơn
  };
  const dsPhim = [];
  for (let i = 1; i < 2; i++) {
    const a = await fetchAPI(
      `https://phimapi.com/v1/api/tim-kiem?keyword=${encodeURIComponent(
        tuKhoa
      )}&page=${i}`
    );
    if (a.length < 0) continue;
    dsPhim.push(...a);
  }

  const fuse = new Fuse(dsPhim, options);
  const ketQua = fuse.search(tuKhoa);

  return ketQua.map((kq) => kq.item);
};
const goiy = (app) => {
  app.get("/api/goi-y", async (req, res) => {
    try {
      const { q } = req.query;
      if (!q) return res.status(400).json({ message: "Thiếu tham số!" });
      const film1 = await timPhimFuzzy(q, 10);
      let film2 = await timPhimFuzzy2(q);

      let slug1 = film1.map((item) => item.slug);
      film2 = film2.filter((item) => !slug1.includes(item.slug));
      let film = [...film2, ...film1];

      res.json(film);
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Lỗi server" });
    }
  });
};

let a = async () => {
  let a = "kimetsu";
  let name = a.split("-").join(" ");
  let b = await timPhimFuzzy2(name);
  console.log(b);
};
// a();

module.exports = goiy;
