const {
  PhimLe,
  PhimBo,
  PhimVienTuong,
} = require("../../models/products.model.js");
const { connectdtb } = require("../../config/database.js");
const e = require("express");
connectdtb();

async function getProducts(model, query) {
  const products = await model.find(query);
  return products;
}

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

module.exports.index = async (req, res) => {
  try {
    const slug = req.params.slug;
    const id = req.params.id;

    // Fetch film by slug
    const film = await fetchAPI(`https://phimapi.com/phim/${slug}`);
    if (film.movie === "") {
      return res.status(500).send("Không tìm thấy phim");
    }
    const epIndex = id;

    let tap;
    for (let i = 0; i < film.episodes[0].server_data.length; i++) {
      if (film.episodes[0].server_data[i].slug == epIndex) {
        tap = film.episodes[0].server_data[i];
      }
    }

    if (!tap) {
      return res.status(404).send("Không tìm thấy tập phim");
    }

    const phimbo = await getProducts(PhimBo, { chieurap: false });

    res.render("client/pages/watchMovie/xemtapphim", {
      film,
      tap,
      phimbo,
    });
  } catch (err) {
    console.error("Lỗi server:", err);
    res.status(500).send("Lỗi server");
  }
};

//

as = async (req, res) => {
  try {
    const slug = "hay-noi-cho-toi-dieu-uoc-cua-ban";
    // Fetch film by slug
    const film = await fetchAPI(`https://phimapi.com/phim/${slug}`);
    if (film.movie === "") {
      // return res.status(500).send("Không tìm thấy phim");
      console.log("Không tìm thấy phim");
    }
    let a = "tap-01a";
    // const tap1 = film.episodes[0].server_data[a].slug.split("-").pop();
    // let tap = tap1;
    // console.log("tap", tap);
    for (let i = 0; i < film.episodes[0].server_data.length; i++) {
      if (film.episodes[0].server_data[i].slug == a) {
        console.log("tap", film.episodes[0].server_data[i]);
      }
    }

    const phimbo = await getProducts(PhimBo, { chieurap: false });
  } catch (err) {
    console.error("Lỗi server:", err);
  }
};

as();
