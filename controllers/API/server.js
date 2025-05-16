const express = require("express");
const cors = require("cors");
const os = require("os");

const app = express();
const networkInterfaces = os.networkInterfaces();

// Middleware để parse JSON request body và xử lý CORS
app.use(express.json());
app.use(cors({ origin: "*" }));

// Lấy IP Local
function getLocalIP() {
  for (const interfaceName in networkInterfaces) {
    for (const iface of networkInterfaces[interfaceName]) {
      if (iface.family === "IPv4" && !iface.internal) {
        return iface.address;
      }
    }
  }
  return "localhost";
}

// Import các API và sử dụng
const goiy = require("./goiy.api.js");
const phantrang1 = require("./phantrang.api.js");

// Gọi các API
goiy(app);
phantrang1(app);

// Lắng nghe kết nối trên cổng 5011
// let PORT = 5011;
// app.listen(PORT, "0.0.0.0", () => {
//   let ip = getLocalIP();
//   console.log(`Server chạy tại:
//     - http://127.0.0.1:${PORT}
//     - http://${ip}:${PORT}
//   `);
// });

// module.exports = app;
