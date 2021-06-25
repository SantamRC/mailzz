const express =require('express')
const app=express();
const path = require("path");
const nodemailer = require('nodemailer');
const cors = require('cors')
const port=process.env.PORT || 5000;


app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(cors())

app.use(express.json())




app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"..", "build", "index.html"));
})



app.post('/create',(req,res)=>{
  var mailOptions = {
    from: process.env.USER,
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.body
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
});
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