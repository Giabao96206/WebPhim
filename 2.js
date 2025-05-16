const express = require("express");
const router = require("./router/client/index.router");
const os = require("os");
const networkInterfaces = os.networkInterfaces();

function getLocalIP() {
  for (const interfaceName in networkInterfaces) {
    for (const iface of networkInterfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  // return "localhost";
}
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const goiy = require("./controllers/API/goiy.api");
const phantrang1 = require("./controllers/API/phantrang.api");
const local = require("./controllers/API/localip.api");

// Gọi các API
goiy(app);
phantrang1(app);
local(app);

app.set("view engine", "pug");
const path = require("path");
app.set("views", path.join(__dirname, "views"));
// File css, js, img phải có trong thư mục ./public
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;
let ip = getLocalIP();
router(app);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running at http://${ip}:${PORT}`);
  console.log(`Server is running at http://localhost:${PORT}`);
});
