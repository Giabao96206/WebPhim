// const a = [1, 2, 3, 4, 5, 6, 6, 7];
// function tong() {
//   let x = 0;
//   for (const item of arguments) {
//     x += item;
//   }
//   return x;
// }

// let kq = tong(...a);
// console.log(kq);

// let kq2 = tong(...a);
// console.log(kq2);
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
// app.post("/selectCode", async (req, res) => {
const check = async () => {
  const email = "baotvg.24it@vku.udn.vn";
  const code = "6738";

  // if (!email || !code) {
  //   return res.status(400).json({ message: "Thiếu email hoặc code!" });
  // }
  try {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("email", sql.VarChar, email)
      .input("codes", sql.NVarChar, code)
      .query("SELECT * FROM codes WHERE email = @email AND code = @codes");
    // if (!result.recordset[0]) {
    //   // return res.status(400).json({ message: "Mã xác nhận không đúng!" });
    //   console.log("Mã xác nhận k đúng");
    //
    if (!result.recordset[0]?.code) {
      console.log("Mã xác nhận k đúng");
    }
    console.log("Thành công");
  } catch (error) {
    // res.status(500).json({ message: "Lỗi server!", error: error.message });
    console.log("Lỗi check");
  }
};
check();
