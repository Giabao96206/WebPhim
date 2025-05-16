// const currentmode = localStorage.getItem("mode");
// if (currentmode) {
//   const body = document.querySelector("body");
//   body.classList.toggle(currentmode);
// }

// const buttonclick = document.querySelector("#test");
// buttonclick.addEventListener("click", () => {
//   const body = document.querySelector("body");
//   body.classList.toggle("dark");
//   const currentmode = localStorage.getItem("mode");
//   if (currentmode) {
//     localStorage.setItem("mode", "");
//   } else {
//     localStorage.setItem("mode", "dark");
//   }
// });

// // npm i --inspect để hiện node trên trình duyệt
// // npm i pug để viết HTMKL CSS tạo đường dẫn đến một trag khác
const express = require("express");
const app = express();
const sql = require("mssql");

const config = {
  user: "sa",
  password: "Giahuybao123zx",
  server: "localhost",
  database: "DESKtop1",
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};
const Check = async () => {
  const email = "Giabao206@gmail.com";
  const username = "GiaBao12312";
  const password = "Giahuybao123zx";
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("username", sql.VarChar, username)
      .input("password", sql.VarChar, password)
      .query(
        "INSERT INTO users (username, password_hash, email) VALUES (@username, @password, @email);"
      );

    if (result) {
      console.log("Insert success!");
    } else {
      console.log("Insert failed!");
    }
    await sql.close();
  } catch (error) {
    console.log(error);
  }
};

Check();
