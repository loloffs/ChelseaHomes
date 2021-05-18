const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));