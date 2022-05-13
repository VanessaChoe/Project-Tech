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
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   res.render('Hello World')
})
app.get('/error', (req, res) => {  // https://expressjs.com/en/guide/error-handling.html#:~:text=Error%20Handling%20refers%20to%20how,your%20own%20to%20get%20started.
   throw new Error('BROKEN')        
})
app.get('/inlogscherm', (req, res) => {
  res.render('inlogscherm')
})
app.get('/keuzescherm', (req, res) => {
  res.render('keuzescherm')
})
app.get('/filterschermGeslacht', (req, res) => {
  res.render('filterschermGeslacht')
})
app.get('/filterschermContinenten', (req, res) => {
  res.render('filterschermContinenten')
})
app.get('/filterschermLanden', (req, res) => {
  res.render('filterschermLanden')
})
app.get('/matchTravelbuddy', (req, res) => {
  res.render('matchTravelbuddy')
})
app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.render('mijnTravelBuddiesMatches')
})

app.listen(port, () => {
   console.log(`Webserver running on port localhost:${port}`)
})



