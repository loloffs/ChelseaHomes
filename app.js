const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
// const path = require('path');
const sendMail = require('./mail');

app.use(express.static('public'))
// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))
app.set('view engine', 'ejs')


// Data parsing... do I need path?
app.use(express.urlencoded({
  extended: false 
}));
app.use(express.json());

app.post('/email', (req, res) => {
  // send email here
  console.log("req.body: app.js line 21", req.body);

  console.log("HERE: ", req.body);


  const { firstName, lastName, email, phone, address, description } = req.body;

  sendMail(firstName, lastName, email, phone, address, description, function(err, data) {
    // console.log("Data: app.js line 26", data);
    if (err) {
      console.log("Err.details: app.js line 28", err);
      res.json(err.details);
    } else {
      console.log("Email sent!")
      res.json({ message: "Message sent!" })
    }
  })
});

app.get('', (req, res) => {
  res.render('index');
});

app.get('/team', (req, res) => {
  res.render('team');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/process', (req, res) => {
  res.render('process');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));