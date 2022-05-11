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

app.get('/',function(req, res){
   res.send('Hello World!')
})

app.listen(port, () => {
   console.log(`Webserver running on port localhost:${port}`)