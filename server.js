const dotenv = require('dotenv');
dotenv.config();
const { ObjectId } = require('mongodb');
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

// Routes //////////////////////////////////////////////////////////////////////////////////////

app.use(express.static("public"));
app.set("view engine", "ejs");

  // Homepage //
  app.get('/', (req, res) => {
    res.render('pages/homepage')
    console.log("Homepage")
  });

  // Favorites page //
  app.get('/favorites', (req, res) => {
    res.render('pages/favorites')
    console.log("favorites page")
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

// Matches ////////////////////////////////////////////////////////////////////////////

app.post('/matches', async (req, res) => {

console.log(req.body) 

const travelbuddies = await db.collection('travelbuddies').find({ 
  geslacht: req.body.geslacht,
  continent: req.body.continenten}).toArray();
  console.log(travelbuddies) 
res.render('pages/matches', {travelbuddies});
});

// Favorite matches /////////////////////////////////////////////////////////////////////

app.get('/favorites', async (req, res) => {
  
  const matches = await db.collection('travelbuddies').find({ 
    like: true,
  }).toArray();
    
  console.log('matches')
res.render('pages/favorites', {matches: matches});
});

app.post('/favorites', async (req, res) => {
  
  const matches = await db.collection('travelbuddies').find({ 
    like: true,
  }).toArray();
    
console.log('hallo')
res.render('pages/favorites', {matches: matches});
});

// Like //////////////////////////////////////////////////////////////////

app.post("/like", async (req, res) => {

  const travelbuddies = await db.collection('travelbuddies').updateOne(
  {
  _id: ObjectId(req.body.like)
  },
  {
  $set: {like: true,}, 
  }
);

res.redirect('/favorites', {travelbuddies});
});

// Disike //////////////////////////////////////////////////////////////////

app.post("/dislike", async (req, res) => {

  const travelbuddies = await db.collection('travelbuddies').updateOne(
    {
    _id: ObjectId(req.body.like)
    },
    {
    $set: {like: true,}, 
    }
  );
  
  res.redirect('/favorites', {travelbuddies});
  });

// Callback //////////////////////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)

  connectDB().then(console.log("Connectie MongoDB"));
})

// Error 404 Page ////////////////////////////////////////////////////////
app.use(function (req, res){
   console.error("Error 404:page not found");
   // res.status(404).render('404', {title: "Error 404: page not found"});
   res.status(404).send('404');
}); 