const express = require('express');
const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('keuzescherm')
})
app.get('/filterschermGeslacht', (req, res) => {
  res.render('filterschermGeslacht')
})
app.get('/filterschermContinenten', (req, res) => {
  res.render('filterschermContinenten')
})
app.get('/matchTravelBuddy', (req, res) => {
  res.render('matchTravelBuddy', {
    data: "iets",
  })
})
app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.render('mijnTravelBuddiesMatches', {
    data: "Robert"
  })
})

app.listen(port, () => {
   console.log(`Webserver running on port localhost:${port}`)
})


