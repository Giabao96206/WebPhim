// fetch("https://dummyjson.com/products")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.products);
//     const NewArray = data.products.map((item) => {
//       return `<div id="imgapi">
//       <img src="${item.thumbnail}" >
//       <h3>${item.title}</h3>
//       </div>`;
//     });
//     const htmls = NewArray.join("");
//     document.querySelector("#playlist").innerHTML = htmls;
//     console.log(htmls);
//   });

// const featchAPI = async () => {
//   const respone = await fetch(
//     "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1"
//   );
//   const data = await respone.json();
//   let newArr = data.items.map((item) => {
//     return item;
//   });
//   return newArr;
// };

// const a = await featchAPI();

// console.log(a);

// console.log(a);
// const fetchAPI = async (api) => {
//   const response = await fetch(api); // sửa lỗi chính tả từ 'respone' thành 'response'
//   const data = await response.json();
//   return data.items; // trả về data từ API
// };

// const fetchData = async () => {
//   const a = await fetchAPI(
//     "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1"
//   );
//   console.log(a[0].name);
// };

// fetchData();

// async function myDisplay() {
//   let myPromise = new Promise(function (resolve, reject) {
//     resolve("I love You !!");
//   });
//   document.getElementById("demo").innerHTML = myPromise.then(function (value) {
//     return value;
//   });
// }

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors()); // Cho phép truy cập từ trình duyệt
app.use(bodyParser.json()); // Xử lý dữ liệu JSON từ client

const fetchAPI = async (api) => {
  try {
    let response = await fetch(api);
    let data = await response.json();
    return data.items || []; // Nếu `items` không tồn tại, trả về mảng rỗng
  } catch (error) {
    console.error("Lỗi khi gọi API:", api, error);
    return []; // Trả về mảng rỗng nếu lỗi
  }
};

const fetchAPI2 = async (api) => {
  try {
    let response = await fetch(api);
    let data = await response.json();
    return data?.data?.items || []; // Kiểm tra data có tồn tại không
  } catch (error) {
    console.error("Lỗi khi gọi API:", api, error);
    return [];
  }
};

const aa = async (req, res) => {
  try {
    const products = await fetchAPI(
      "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=2"
    );

    const phimle = await fetchAPI2(
      "https://phimapi.com/v1/api/danh-sach/phim-le?&limit=60"
    );

    const phimbo = await fetchAPI2(
      "https://phimapi.com/v1/api/danh-sach/phim-bo?&limit=60"
    );

    const FilmNew = await fetchAPI(
      "https://phimapi.com/danh-sach/phim-moi-cap-nhat-v3?page=1"
    );
    console.log(FilmNew);
  } catch (err) {
    console.log("Loi goi API", err);
  }
};

aa();
