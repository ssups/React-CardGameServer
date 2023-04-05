const express = require('express');
const app = express();
const PORT = 81;
const { sequelize } = require('./model');
const cors = require('cors');
const dot = require('dotenv');
const path = require('path');

dot.config();

// 프론트 구동중인 포트 접근 허용해주기
const options = {
  origin: ['http://card.ssups.shop', 'https://card.ssups.shop'],
};
app.use(cors(options));

// 디비연결
sequelize
  .sync({ force: false })
  .then(() => console.log('디비 연결 잘됨'))
  .catch(err => console.log(err));

app.use(express.json()); // 객체형태 전달받을때 해석해주는 기능

// 리액트 열기
app.use(express.static(path.join(__dirname, 'build')));

// 라우터
const { user, login, card, item, image, post, comment } = require('./routers');
app.use(user);
app.use(login);
app.use(card);
app.use(item);
app.use(image);
app.use(post);
app.use(comment);

// 정적폴더 경로설정
app.use('/images', express.static(path.join(__dirname, '/images')));

// 이거 제일밑에 해줘야 다른 get 방식의 경로들 다 먹히고 나서 나머지만 밑에꺼 적영됨
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

// 서버열기
app.listen(PORT, () => {
  console.log(`react_card ${PORT}번 포트에 열림`);
});

module.exports = app;
