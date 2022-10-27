const express = require("express");
const app = express();
const PORT = 3000;
const { sequelize } = require("./model");
const cors = require("cors");
const dot = require("dotenv");
const path = require("path");

dot.config();

// 서버열기
app.listen(PORT, () => {
  console.log(PORT, "번 포트에 서버 열림");
});

// 디비연결
sequelize
  .sync({ force: false })
  .then(() => console.log("디비 연결 잘됨"))
  .catch(err => console.log(err));

// 프론트 구동중인 포트 접근 허용해주기
const options = {
  origin: "http://localhost:3000",
};
app.use(cors(options));
app.use(express.json()); // 객체형태 전달받을때 해석해주는 기능

// 리액트 열기
app.use(express.static(path.join(__dirname, "react/build")));
app.use(express.static(path.join(__dirname, "react/public")));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
app.get("/main", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
app.get("/shop", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
app.get("/card_book", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
app.get("/public_board", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
app.get("/notice_board", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
app.get("/mypage", (req, res) => {
  res.sendFile(path.join(__dirname, "react/build/index.html"));
});
// 위에처럼 하나하나 안할라면 밑에 * 이걸로 전역 get 걸어놓고 데이터 요청방식 전부 post로 바꾸면됨
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "react/public/index.html"));
// });

// 라우터
const { user, login, card, item, image, post, comment } = require("./routers");
app.use(user);
app.use(login);
app.use(card);
app.use(item);
app.use(image);
app.use(post);
app.use(comment);

// 정적폴더 경로설정`
app.use("/images", express.static(path.join(__dirname, "/images")));
