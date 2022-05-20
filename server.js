// const express = require("express");
// const app = express();
// const port = 3000;
// const path = require('path');

// app.use(express.static("public"));

// app.use(express.static(path.join(__dirname, 'public')));

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
// 	res.render("Travelbuddy");
// });
// app.get("/matchTravelBuddy", (req, res) => {
//  	res.render("matchTravelBuddy", {
// 	});
// app.get("/geslacht", (req, res) => {

// 	const match = {
// 		image: "/images/eline.jpg",
// 		data: "Eline - Afrika, Marokko",

// 	}

// 	res.render("geslacht",{matchEline:match});
// });
// app.get("/filterschermGeslacht", (req, res) => {
// 	res.render("filterschermGeslacht");
// });
// app.get("/filterschermContinenten", (req, res) => {
// 	res.render("filterschermContinenten");
// });
// app.get("/matchTravelBuddy", (req, res) => {
// 	res.render("matchTravelBuddy", {
// 		data: "iets",
// 	});
// });

// app.listen(port, () => {
// 	console.log(`Webserver running on port localhost:${port}`)
// })

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 3000;
// const port = 3000;
// const dotenv = require('dotenv');
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://VanessaChoe:<Jovugi81!>@cluster0.quc5i.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
  // perform actions on the collection object
//   client.close();
// });

const express = require("express");
const app = express();

const port = process.env.PORT || 3000;


// import { Client } from 'best-error-reporting-service'

// export default new Client(process.env.API_KEY)

// import 'dotenv/config'

// import errorReporter from './errorReporter.mjs'
// errorReporter.report(new Error('documented example'))

// mongodb connectie///////////////////////////////////////////////////////////////////////
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://VanessaChoe:ster12345@cluster0.quc5i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

const path = require('path');

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.render('homepage')
})
app.get('/mijnTravelBuddiesMatches', (req, res) => {
  res.render('mijnTravelBuddiesMatches')
})

app.post ("/geslacht", (req, res) => {
  res.send("geslacht")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})