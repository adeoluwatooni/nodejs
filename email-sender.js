
const nodemailer = require('nodemailer')


// using nodemailer module to help node gain access to the mail you will be sending from
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'email@gmail.com',
    pass: 'password'
  }
});



const mailOptions = {
  from: 'idowu.adeoluwa@yahoo.com',
  to: 'helloivytech@gmail.com',
  subject: 'Sending this Email using Node.js',
  text: 'I hope this works...'
};


transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});