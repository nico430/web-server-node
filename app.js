require('dotenv').config();
const express = require('express');
var hbs = require('hbs');

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static( __dirname + '/public') )

app.get('/home', (req, res) => {
  res.render("home",{
    name: "Nicolas",
    apellido: "Chaban",
    titulo: "Curso de Node",
    URL:"http://localhost:8080"
  })
})

app.get('/generic', (req,res)=>{
  res.render("generic")
})


app.get('/elements', (req,res)=>{
  res.render("elements")
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
  console.log(`Example app listenning at http://localhost:${port}`)
})