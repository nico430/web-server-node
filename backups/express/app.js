const express = require('express')
const app = express()
const port = 8080

// servir contenido estático
app.use( express.static('public') ) // use the public folder, so we can delete the "/" endpoint couse this is what the server will return by default, the file name should be index.html otherwise express will not be able to found it

// app.get('/', function (req, res) {
//   res.send('Home Page')
// })

app.get('/hola-mundo', function (req, res) { // public folder has priority
  res.send('hola mundo desde su respectiva ruta')
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html') // sendFile sends a file but we need to especify an absolute route __dirname return us the path where the app is installed
})

app.listen(port, ()=>{
  console.log(`Example app listenning at http://localhost:${port}`)
})