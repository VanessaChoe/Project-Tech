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

const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get('/homepage', (req, res) => {
  res.render('homepage')
})
// app.get('/mijnTravelBuddiesMatches', (req, res) => {
// 	res.render('mijnTravelBuddiesMatches')
//   })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})