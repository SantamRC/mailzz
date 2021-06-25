const express =require('express')
const app=express();
const port=process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})
  
if(process.env.NODE_ENV=='production'){
  app.use(express.static('../build'))
}

app.listen(port, () => {
  console.log(`Serverlistening at http://localhost:${port}`)
})