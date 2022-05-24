const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// mongodb connectie///////////////////////////////////////////////////////////////////////
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const path = require('path');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('homepage')
})
app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.render('mijnTravelBuddiesMatches')

  // const match = {
  //    		image: "/images/eline.jpg",
  //        data: "Eline - Afrika, Marokko",
  // });
});

// app.get("/geslacht", async (req, res) => {
//   res.render("")
// }
// )
app.post ("/geslacht", (req, res) => {
  res.send("geslacht")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})