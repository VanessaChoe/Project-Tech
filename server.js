const dotenv = require('dotenv');
dotenv.config();
const { ObjectId } = require('mongodb');
const express = require("express");
const app = express();
const port = process.env.PORT || 18440;

app.use(express.urlencoded({ extended: true }));

// Routes //////////////////////////////////////////////////////////////////////////////////////

app.use(express.static("public"));
app.set("view engine", "ejs");

  // Homepage ////////////////////////////////////////////
  app.get('/', (req, res) => {
    res.render('homepage')
    console.log("homepage")
  });

  // mijnTravelBuddiesMatches ///////////////////////////
  app.get('/mijnTravelBuddiesMatches.', (req, res) => {
    res.render('mijnTravelBuddiesMatches')
    console.log("mijnTravelBuddiesMatches")
  });

  // favorietenTravelBuddyMatches //////////////////////////
  app.get('/favorietenTravelBuddyMatches.', (req, res) => {
    res.render('favorietenTravelBuddyMatches')
    console.log(favorietenTravelBuddyMatches)
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

// Data uit MongoDB////////////////////////////////////////////////////////////////////////////

// TravelBuddy Matches ///////////////////////////////////////////////
app.post('/mijnTravelBuddiesMatches', async (req, res) => {

console.log(req.body)

const travelbuddies = await db.collection('travelbuddies').find({ 
  geslacht: req.body.geslacht,
  continent: req.body.continenten}).toArray();
  
res.render('mijnTravelBuddiesMatches', {travelbuddies});
});

// Like //////////////////////////////////////////////////////////////////
app.post("/favorietenTravelBuddyMatches", async (req, res) => {

const favorietenTravelBuddyMatches = await db.collection('travelbuddies').updateOne(
  {
  _id: ObjectId(req.body.like)
  },
  {
  $set: {like: true,}, 
  }
);
  
res.send('favorietenTravelBuddyMatches', {favorietenTravelBuddyMatches});
});

// Dislike ///////////////////////////////////////////////////////////////
// app.post("/removeFavoriteTravelBuddy", async (req, res) => {
//   await db.collection('travelbuddies').updateOne(

//     {
//        _id:ObjectId(req.body.like),
//      },
//     {
  //       $set: {like: true,}, 
  //     }
//     );

//     await users.updateOne(
//       { _id: ObjectId("62967307a4ff59e9678d2943") },
//       { $push: { game_id: req.body.like } }
//     );

//     res.redirect("/");
//   } catch (err) {
//     console.log(err);
//   }
// });

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
