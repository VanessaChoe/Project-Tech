const dotenv = require('dotenv').config();
const { ObjectId } = require('mongodb');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Routes //////////////////////////////////////////////////////////////////////////////////////

app.use(express.static("public"));
app.set("view engine", "ejs");

  // Homepage ////////////////////////////////////////////
  app.get('/', (req, res) => {
    res.render('homepage')
    console.log("het werkt")
  });

  // mijnTravelBuddiesMatches ///////////////////////////
  app.get('/mijnTravelBuddiesMatches', (req, res) => {
    res.render('mijnTravelBuddiesMatches')
  });

// MongoDB Connectie///////////////////////////////////////////////////////////////////////////

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

// Data uit MongoDB//////////////////////////////////////////////////////////////////////////

 app.post('/', async (req, res) => {

 const query = {}; // Alle data uit collection
 const travelbuddies = await db.collection('travelbuddies').find(query, {}).toArray();
  
 res.render('mijnTravelBuddiesMatches', {travelbuddies:travelbuddies});
 });

app.use(function (req, res){
  console.error("Error 404:page not found");
  res.status(404).render('404', {title: "Error 404: page not found"});
});  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  connectDB().then(console.log("Connectie MongoDB"));
})

