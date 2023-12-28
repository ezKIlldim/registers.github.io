const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/registration', (req, res) => {
  res.sendFile(__dirname + '/registration.html');
});

app.post('/register', (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  // Здесь можно обрабатывать данные, сохранять в базу данных и т.д.

  res.send(`Пользователь ${username} успешно зарегистрирован!`);
});

app.listen(3000, () => {
  console.log('Сервер запущен на порту 3000');
});
