const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

//setting header
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

//app can read json file
app.use(express.json());
app.use(
  cors({
    origin: true,
  })
);

const port = 3005; // Chọn cổng tùy ý

// Định tuyến API để lấy dữ liệu hình ảnh
app.get('/get-image/:imageName', (req, res) => {
  const imageName = req.params.imageName;

  try {
    // console.log('imgname: ', imageName);
    const imageData = fs.readFileSync(`data/images/${imageName}`, "base64");
    res.send(imageData);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
});

// Khởi động máy chủ
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
