// const express = require('express');

// ////////////////////////////////////////////////
// const app = express()
// const port = 3000
// const path = require("path");

// const publicpath = path.resolve(__dirname,'public')
// ///////////////////////////////////////////////

// app.use('publicpath',express.static('Images'));

// {/* <img src="public/America.jpg"></img> */}

// app.get('/',function(req, res){
//   res.send('Static Files')
// })

// app.listen(port, () => {
//   console.log(`Webserver running on port localhost:${port}`)
// })


// http://localhost:3000/Inlogscherm.html

const express = require('express');

// ////////////////////////////////////////////////
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send('Hello World')
})
app.get('/Over', (req, res) => {
  throw new Error('BROKEN') // Express will catch this on its own.
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/login', (req, res) => {
  res.send('Log in')
})

app.listen(port, () => {
   console.log(`Webserver running on port localhost:${port}`)
})