const express = require('express')
const app = express()
const port = 8080
// TODO: require('hbs')

app.set('view engine', 'hbs')

app.use( express.static('public') )

app.get('/', function (req, res) {
  res.render("home")
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, ()=>{
  console.log(`Example app listenning at http://localhost:${port}`)
})