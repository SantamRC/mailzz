const express =require('express')
const app=express();
const path = require("path");
const nodemailer = require('nodemailer');
const mongoose=require('mongoose')
const cors = require('cors')
const port=process.env.PORT || 5000;

let Data=require('./model')


var mongodb = 'mongodb://localhost:27017/Email'

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
    from: 'recurinmail@gmail.com',
    to: req.body.recipient,
    subject: req.body.subject,
    text: req.body.body
  };
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'recurinmail@gmail.com',
        pass: 'mfhrpjexgnigaicm'
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

mongoose.connect(mongodb, { useNewUrlParser: true,useUnifiedTopology: true }).then(
  () => { console.log('Database is connected') },
  err => { console.log('There is problem while connecting database ' + err) }
);


app.post('/signup',(req,res)=>{
  let body={
    Username:req.body.Username,
    Password:req.body.Password,
    Emails:[]
  }

  let newData=new Data(body)
  newData.save().then(()=>{
    res.status(200).send("User Signed up")
  }).catch(err=>{
    res.status(400).send("something went wrong")
  })
})