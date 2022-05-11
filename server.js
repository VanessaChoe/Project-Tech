const express = require('express')

// ////////////////////////////////////////////////
const app = express()
const port = 3000
const path = require('favorieten')

// ///////////////////////////////////////////////

app.use(express.static('public'));

/////////////////////////////////////////////////
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Webserver running on port localhost:${port}`)
})


// http://localhost:3000/Inlogscherm.html

