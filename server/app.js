const express = require('express');
const app = express();
// const path = require('path');
// const router = express.Router();
const PORT = process.env.PORT || 3000;

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/index', (req, res) => {
  res.render('index.html');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));