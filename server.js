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












import * as Sqrl from 'squirrelly'

const myTemplate = 'My favorite template engine is {{it.favorite}}.'

const result = Sqrl.render(myTemplate, {
  favorite: 'Squirrelly, definitely'
})

const express = require('express');

const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
   res.send('Hello World')
})
app.get('/error', (req, res) => {  // https://expressjs.com/en/guide/error-handling.html#:~:text=Error%20Handling%20refers%20to%20how,your%20own%20to%20get%20started.
   throw new Error('BROKEN')        
})
app.get('/Favorietenscherm', (req, res) => {
  res.send('About')
})
app.get('/login', (req, res) => {
  res.send('Log in')
})

app.listen(port, () => {
   console.log(`Webserver running on port localhost:${port}`)
})

