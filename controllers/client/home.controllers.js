module.exports.index = (req, res) => {
  res.render("client/pages/home/index", {
    titlePage: "Trang chu",
    messeage: "Hello World",
    kk: "Xin chao",
  });
};
