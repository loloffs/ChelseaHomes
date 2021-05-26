const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();
console.log(process.env)

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: 'sandboxd5ff4e8d7df74c21984c7f7af1e22cca.mailgun.org'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));

const mailOptions = {
  from: '',
  to: 'chelseahomeskelowna@gmail.com',
  subject: 'Chelsea Homes Website Inquiry',
  text: 'I am testing the email feature'
};

transporter.sendMail(mailOptions, (err, data) => {
  if (err) {
    console.log("There was an error")
  } else {
    console.log("Message sent!")
  }
});