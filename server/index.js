const express =require('express')
const app=express();
const path = require("path");
const port=process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"..", "build", "index.html"));
})
  
if(process.env.NODE_ENV=='production'){
  app.use(express.static('../build'))
}

app.listen(port, () => {
  console.log(`Serverlistening at http://localhost:${port}`)
})