const mongoose = require("mongoose");

const connectdtb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/KKPhim");
    console.log("Kết nối database thành công!");
  } catch (error) {
    console.log("Kết nối database thất bại!");
  }
};

module.exports = { connectdtb }; // ✅ Export dưới dạng object
