const dotenv = require("dotenv");
dotenv.config();
const { ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));

const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

// MongoDB Connectie///////////////////////////////////////////////////////////////////////////

const { MongoClient } = require("mongodb");

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

// Routes //////////////////////////////////////////////////////////////////////////////////////

app.use(express.static("public"));
app.set("view engine", "ejs");

// Homepage //
app.get("/", (req, res) => {
    res.render("pages/homepage");
    console.log("/Homepage");
});

// Matches ////////////////////////////////////////////////////////////////////////////

app.get("/travelbuddies", async (req, res) => {
    const travelbuddies = await db
        .collection("travelbuddies")
        .find({
            geslacht: req.query.geslacht,
            continent: req.query.continenten,
        })
        .toArray();

    console.log("/travelbuddies matches");

    res.render("pages/matches", {
        travelbuddies,
        geslacht: req.query.geslacht,
        continenten: req.query.continenten,
    });
});

app.post("/travelbuddies", async (req, res) => {
    res.redirect(
        `/travelbuddies?geslacht=${req.body.geslacht}&continenten=${req.body.continenten}`
    );
});

// Like //////////////////////////////////////////////////////////////////

app.post("/like", async (req, res) => {
    try {
        await db.collection("travelbuddies").updateOne(
            {
                _id: ObjectId(req.body.like),
            },
            {
                $set: { like: true },
            }
        );

        const travelbuddies = await db
            .collection("travelbuddies")
            .find({
                like: true,
            })
            .toArray();

        res.render("pages/favorites", {
            travelbuddies,
            geslacht: req.query.geslacht,
            continenten: req.query.continenten,
        });
    } catch (err) {
        res.status(404).send("404");
    }
});

// Unlike //////////////////////////////////////////////////////////////////

app.post("/unlike", async (req, res) => {
    try {
        await db.collection("travelbuddies").updateOne(
            {
                _id: ObjectId(req.body.unlike),
            },
            {
                $set: { like: false },
            }
        );

        const travelbuddies = await db
            .collection("travelbuddies")
            .find({
                like: true,
            })
            .toArray();

        res.render("pages/favorites", {
            travelbuddies,
            geslacht: req.query.geslacht,
            continenten: req.query.continenten,
        });
    } catch (err) {
        res.status(404).send("404");
    }
});

// Favorite matches ////////////////////////////////////////////////////////////////////

app.get("/favorites", async (req, res) => {
    try {
        const travelbuddies = await db
            .collection("travelbuddies")
            .find({
                like: true,
            })
            .toArray();

        console.log("Favorite page");

        res.render("pages/favorites", {
            travelbuddies,
            geslacht: req.query.geslacht,
            continenten: req.query.continenten,
        });
    } catch (err) {
        res.status(404).send("404");
    }
});

// Callback //////////////////////////////////////////////////////////////
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

    connectDB().then(console.log("Connectie MongoDB"));
});

// Error 404 Page ////////////////////////////////////////////////////////
app.use(function (req, res) {
    console.error("Error 404:page not found");
    res.status(404).send("404");
});
