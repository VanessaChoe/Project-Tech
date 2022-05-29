const dotenv = require('dotenv').config();
// const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
let db = null;

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(function (req, res){
  console.error("Error 404:page not found");
  res.status(404).render('404', {title: "Error 404: page not found"});
});
app.get('/', (req, res) => {
  res.render('homepage')
})
app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.render('mijnTravelBuddiesMatches')
});
app.post ("/geslacht", (req, res) => {
  res.send("geslacht")
})




// //MongoDB/////////////////////////////////////////////////////////////////////////
const { MongoClient, ServerApiVersion } = require('mongodb');

async function connectDB() {
  const uri = process.env.DB_URI;
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    db = client.db(process.env.DB_NAME);
  } catch (error) {
    throw error;
  }
}

// //////////////////////////////////////////////////////

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  connectDB().then(console.log("connectie"));
})

// const matchItems = [{}];

// app.post('/', (req, res) => {
//   matchItems.push({
//     gender: req.body.gender,
//     age: req.body.age,
//     size: req.body.size,
//   });

//   const userMatches = matches.filter((match) => {
//     //checking if filters are correct
//     const ageMatches = req.body.age.includes(match.age);
//     const sizeMatches = req.body.size.includes(match.size);
//     const genderMatches = req.body.gender.includes(match.gender);

//     console.log(ageMatches, sizeMatches, genderMatches);
//     if (ageMatches && sizeMatches && genderMatches) {
//       return match;
//     }
//   });

//   res.render('pages/match', { matches: userMatches });
// });