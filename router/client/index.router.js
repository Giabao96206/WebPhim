const ProductRouter = require("./product.router");
const homeRouter = require("./home.router");
const watchRouter = require("./watch.router");
const watchmainRouter = require("./watchmain.router");
const watchtapphimRouter = require("./watchtapphim.router");
const searchRouter = require("./search.router");
const countryRouter = require("./country.router");
module.exports = (app) => {
  app.use("/", homeRouter);
  app.use("/products", ProductRouter);
  app.use("/watch", watchRouter);
  app.use("/watchmain", watchmainRouter);
  app.use("/watchmain", watchtapphimRouter);
  app.use("/search", searchRouter);
  app.use("/country", countryRouter);
  app.use((req, res, next) => {
    res.setTimeout(5000, () => {
      // timeout sau 10 giây
      res.status(503).send("⏳ Server timeout. Xin vui lòng thử lại sau!");
    });
    next();
  });
};
