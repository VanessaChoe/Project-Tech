const express = require('express')

// ////////////////////////////////////////////////
const app = express()
const port = 3000
// ///////////////////////////////////////////////

app.use('/public',express.static('Images'));

<img src= "/Images/America.jpg"></img>
/////////////////////////////////////////////////
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.get('/',function(req, res){
  res.send('Static Files')
})

app.listen(port, () => {
  console.log(`Webserver running on port localhost:${port}`)
})


// http://localhost:3000/Inlogscherm.html

