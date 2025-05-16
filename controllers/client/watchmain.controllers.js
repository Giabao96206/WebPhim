const {
  PhimLe,
  PhimBo,
  PhimVienTuong,
} = require("../../models/products.model");
const { connectdtb } = require("../../config/database.js");
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

// module.exports.index = async (req, res) => {
//   let phimbo, film;
//   try {
//     (phimbo = await fetchAPI(
//       `https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1`
//     )),
//       (film = await fetchAPI(`https://phimapi.com/phim/ngoi-truong-xac-song`));

//     res.render("client/pages/watchMovie/watchList", {
//       titlePage: "Trang xem phim",
//       phimbo,
//       film,
//     });
//   } catch (error) {
//     console.error("Lỗi khi gọi API:", error);
//   }
// };

module.exports.index = async (req, res) => {
  try {
    const movieId = req.params.id;
    console.log("movieId:", movieId); // Kiểm tra giá trị của movieId
    // Lấy phim theo slug
    const film = await fetchAPI(`https://phimapi.com/phim/${movieId}`);
    if (film.movie === "") {
      return res.status(500).send("Không tìm thấy phim");
    }

    // Lấy thêm danh sách phim bộ để render bên cạnh
    const phimbo = await getProducts(PhimBo, { chieurap: false });

    res.render("client/pages/watchMovie/xemphim", {
      film, // vì film là mảng, lấy phần tử đầu tiên
      phimbo,
    });
  } catch (err) {
    console.error("Lỗi server:", err);
    res.status(500).send("Lỗi server");
  }
};

let a = async () => {
  let movieId = "ngoi-truong-xac-song"; // Thay thế bằng ID phim bạn muốn kiểm tra
  const b = await fetchAPI(`https://phimapi.com/phim/${movieId}`);

  console.log(b.movie.category[0].name); // Kiểm tra giá trị của b
};
