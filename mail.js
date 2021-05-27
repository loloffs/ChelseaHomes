const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
require('dotenv').config();
// console.log(process.env)

const auth = {
  auth: {
    api_key: process.env.API_KEY,
    domain: 'sandboxd5ff4e8d7df74c21984c7f7af1e22cca.mailgun.org'
  }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = function(firstName, lastName, email, phone, address, description, cb) {
  const mailOptions = {
    to: 'chelseahomeskelowna@gmail.com',
    subject: 'Chelsea Homes Website Inquiry',
    firstName,
    lastName,
    from: email,
    phone,
    address,
    description
  };
  
  transporter.sendMail(mailOptions, function(err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
}

module.exports = sendMail;