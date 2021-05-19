const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const expressLayouts = require('express-ejs-layouts');

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// app.use(expressLayouts)
// app.set('layout', './layouts/_header')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/quote', (req, res) => {
  res.render('quote');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));