const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!!')
})

app.listen(port, () => {
  console.log(`Webserver running on port localhost:${port}`)
})

// app.use('/static', express.static('public'));
// http://localhost:3000/static/index.html

