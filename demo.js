const axios = require("axios");
const cheerio = require("cheerio");

async function searchAnime(keyword) {
  try {
    const url = `https://gogoanimehd.io//search.html?keyword=${encodeURIComponent(
      keyword
    )}&page=1`;
    const response = await axios.get(url);
    const html = response.data;
    const $ = cheerio.load(html);
    const results = [];

    $(".items .img").each((_, element) => {
      const title = $(element).attr("title");
      const link = $(element).parent().attr("href");
      results.push({ title, link });
    });

    console.log("🔎 Kết quả tìm kiếm:", results);
  } catch (error) {
    console.error("💥 Lỗi:", error.message || error);
  }
}

searchAnime("Attack on Titan");
