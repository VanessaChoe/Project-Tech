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
app.get('/inlogscherm', (req, res) => {
  res.send('inlogscherm')
})
app.get('/keuzescherm', (req, res) => {
  res.send('keuzescherm')
})
app.get('/filterschermGeslacht', (req, res) => {
  res.send('filterschermGeslacht')
})
app.get('/filterschermContinenten', (req, res) => {
  res.send('filterschermContinenten')
})
app.get('/filterschermLanden', (req, res) => {
  res.send('filterschermLanden')
})
app.get('/matchTravelbuddy', (req, res) => {
  res.send('matchTravelbuddy')
})
app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.send('mijnTravelBuddiesMatches')
})

app.listen(port, () => {
   console.log(`Webserver running on port localhost:${port}`)
})



