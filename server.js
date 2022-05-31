const dotenv = require('dotenv').config();
// const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

const express = require("express");
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
let db = null;

// app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");



app.get('/', (req, res) => {
  res.render('homepage')
  console.log("het werkt")
});

app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.render('mijnTravelBuddiesMatches')
});

app.get('/match', (req, res) => {
  res.render('match')
});

app.post ("/geslacht", (req, res) => {
  res.send("geslacht")
});




// //MongoDB/////////////////////////////////////////////////////////////////////////
const { MongoClient } = require('mongodb');

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
};

// async function run() {
//   try {
//     await client.connect();

//     const database = client.db("Cluster0");
//     // const movies = database.collection("travelbuddies");
//   }
// };

// //////////////////////////////////////////////////////


// match ////////////////////////////////////////////////

// const match = {
//   image: "images/meisje.png"
//   name: String,
//   geslacht: String,
//   continent: ""
//   land: ""
// }

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)

//   connectDB().then(console.log("Connectie MongoDB"));
// })

//  app.post('/', async (req, res) => {
 
//   const travelbuddies = await db.collection('travelbuddies').find({}, {}).toArray()

//    const profiles = travelbuddies.filter((match) => {
//      //checking if filters are correct
//      const continent = req.body.continent.includes(match.continent);
//      const geslacht = req.body.geslacht.includes(match.geslacht);

//      console.log( continent, geslacht);
//      if (continent && geslacht) {
//        return match;
//      }
//    });

//    res.render('pages/homepage', {travelbuddies:travelbuddies});
//  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  connectDB().then(console.log("Connectie MongoDB"));
})

 app.post('/', async (req, res) => {

 const query = {};
 const travelbuddies = await db.collection('travelbuddies').find(query, {}).toArray();
  
 res.render('mijnTravelBuddiesMatches', {travelbuddies:travelbuddies});
 });

app.use(function (req, res){
  console.error("Error 404:page not found");
  res.status(404).render('404', {title: "Error 404: page not found"});
});      