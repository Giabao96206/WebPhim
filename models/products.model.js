const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: String,
  slug: String,
  type: String,
  poster_url: String,
  chieurap: Boolean,
  time: String,
  episode_current: String,
  quality: String,
  lang: String,
  year: Number,
  category: [String],
});

const PhimLe = mongoose.model("phimles", productSchema);
const PhimBo = mongoose.model("phimbos", productSchema);
const PhimVienTuong = mongoose.model("phimvientuongs", productSchema);

module.exports = { PhimLe, PhimBo, PhimVienTuong };
