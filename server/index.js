const express =require('express')
const app=express();
const path = require("path");
const nodemailer = require('nodemailer');
const mongoose=require('mongoose')
const cors = require('cors')
var bodyParser = require('body-parser')
const port=process.env.PORT || 5000;
const cron = require('node-cron');
const cronJob = require('cron').CronJob;
let sec,min,hr,mon,week
let Data=require('./model')
const MongoCron=require('mongodb-cron')

//var mongodb = 'mongodb://localhost:27017/Email'
var mongodb=`mongodb+srv://santam:santam12345@cluster.q6ixt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

app.use(express.urlencoded({
    extended: true
  })
)
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

let jobs=[
]

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"..", "build", "index.html"));
})

const send=(req)=>{
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
}

app.post('/send',(req,res)=>{
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
  console.log(body)
  let newData=new Data(body)
  newData.save().then(()=>{
    res.status(200).send("User Signed up")
  }).catch(err=>{
    res.status(400).send("something went wrong")
  })
})


app.post('/create',(req,res)=>{
  let data={
    title:req.body.title,
    subject:req.body.subject,
    body:req.body.body,
    recipient:req.body.recipient,
    cc:req.body.cc,
    interval:req.body.interval
  }
  console.log(data)
  Data.update(
    {Username:req.body.Username},
    {$push:{Emails:data}},
    (err,res)=>{
      if(err){
        consol.log(err)
      }else{
        console.log(res)
      }
    }
  )
  jobs.push(data)
  console.log(jobs)
  jobs.forEach(job => {
    console.log("THis is the job"+job.interval)
    new cronJob(job.interval, () => {
        //console.log("This is from"+job.title);
        send(req)
    }).start();
  });
  res.status(200).send("Email appended")
})


app.post('/dashboard',(req,res)=>{
  console.log("This is the body:"+req.body.Username)
  Data.find({Username:req.body.Username},(err,result)=>{
    if(err){console.log(err)}
    else{
      res.status(200).send(result)
    }
  })
})

app.post('/login',(req,res)=>{
  Data.find({Username:req.body.Username,Password:req.body.Password},(err,result)=>{
    if(err){console.log(err)}
    else{
        res.send({"response":"logged"})
    }
  }).catch((err)=>{
    console.log(err)
  })
})

// let run=()=>{
//   Data.find({},(err,result)=>{
//     result.forEach((item)=>{
//       const emails=item.Emails
//       let job=new MongoCron({
//         emails,
//         onDocument: async (doc)=> console.log(doc),
//         onError: async (err)=>console.log(err)
//       })
//       job.start()
//     })
//   })
// }
//run()

