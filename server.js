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
  // app.get('/mijnTravelBuddiesMatches', (req, res) => {
  //   res.render('mijnTravelBuddiesMatches')
  //   console.log("mijnTravelBuddiesMatches")
  // });

  // // favorietenTravelBuddyMatches //////////////////////////
  // app.post('/favorietenTravelBuddyMatches', (req, res) => {
  //   res.render('favorietenTravelBuddyMatches')
  //   console.log(favorietenTravelBuddyMatches)
  // });

  // app.post("/favorietenTravelBuddyMatches", async (req, res) => {
  // await db.collection('travelbuddies').updateOne(
    
  //        {
  //           _id:ObjectId(req.body.like),
  //         },
  //        {
      //      $set: {like: true,}, 
      //    }
    //     );
    //     res.redirect("/favorietenTravelBuddyMatches");
    // });

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
  console.log(travelbuddies) 
res.render('mijnTravelBuddiesMatches', {travelbuddies});
});

// Like //////////////////////////////////////////////////////////////////
app.get('/favorietenTravelBuddyMatches', async (req, res) => {

  console.log(req.body)
  
  const travelbuddies = await db.collection('travelbuddies').find({ 
    like: true}).toArray();
    $set: like: false
    
    console.log(travelbuddies) 
  res.render('mijnTravelBuddiesMatches', {travelbuddies});
  });

// app.post("/favorietenTravelBuddyMatches", async (req, res) => {

// const favorietenTravelBuddyMatches = await db.collection('travelbuddies').updateOne(
//   {
//   _id: ObjectId(req.body.like)
//   },
//   {
//   $set: {like: true,}, 
//   }
// );

// res.redirect('mijnTravelBuddiesMatches');
// });

// Dislike ///////////////////////////////////////////////////////////////
// app.get('/unlikeFavorietenTravelBuddyMatches', async (req, res) => {

//   console.log(req.body)
  
//   const travelbuddies = await db.collection('travelbuddies').find({ 
//     like: true}).toArray();
    
//     console.log(travelbuddies) 
//   res.render('mijnTravelBuddiesMatches', {travelbuddies});
//   });

// app.post("/favorietenTravelBuddyMatches", async (req, res) => {

// const favorietenTravelBuddyMatches = await db.collection('travelbuddies').updateOne(
//   {
//   _id: ObjectId(req.body.unlike)
//   },
//   {
//   $set: {like: false,}, 
//   }
// );

// res.redirect('mijnTravelBuddiesMatches');
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
