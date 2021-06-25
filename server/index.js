const express =require('express')
const app=express();
const path = require("path");
const nodemailer = require('nodemailer');
const port=process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"..", "build", "index.html"));
})


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'santamdev404@gmail.com',
    pass: 'developmentisfun12345'
  }
});



app.post('/create',(req,res)=>{
  var mailOptions = {
    from: 'santamdev404@gmail.com',
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.body
  };
  console.log(mailOptions)
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})


if(process.env.NODE_ENV=='production'){
  app.use(express.static('../build'))
}

app.listen(port, () => {
  console.log(`Serverlistening at http://localhost:${port}`)
})