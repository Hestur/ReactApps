const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const myRoutes = express.Router();
const PORT = 4010;

// **** Express server opsætning (så 'andre' kan kontakte api'et og hente data udefra)
// *****************************************************************************
app.use(cors());
app.use(bodyParser.json());
app.use("/", myRoutes);
app.listen(PORT, function() {
  console.log("SERVER ER I FIN FORM og lytter på port: ", PORT);
});

// **** Kontakt til MongoDB med hjælp fra Mongoose
// ******************************************************************************
mongoose.connect("mongodb://127.0.0.1:27017/mintestdb", {
  useNewUrlParser: true
});
// Engangs-test om databasen svarer
const connection = mongoose.connection;
connection.once("open", function() {
  console.log("MongoDB database svarer - der er hul igennem!!!");
});

// ********************************************************************************************
// API METODER
// ********************************************************************************************

let MitDyr = require("./models/dyr"); // instans af min model af et dyr

// **** Hent alle
// ********************
myRoutes.route("/hentalle").get(function(req, res) {
  MitDyr.find(function(err, alledyr) {
    if (err) {
      console.log("ups en fejl: ", err);
    } else {
      res.json(alledyr); // response ('send tilbage') alle dyr der blev fundet
    }
  });
});

// **** Opret et dyr
// ********************
myRoutes.route("/opretdyr").post(function(req, res) {
  let nytdyrfrabruger = new MitDyr(req.body);
  nytdyrfrabruger
    .save()
    .then(n => {
      res.status(200).json("OK - der er oprettet et nyt dyr");
    })
    .catch(err => {
      res.status(400).send("nyt dyr fejlede - sorry!");
    });
});

// https://mongoosejs.com/docs/guide.html

// ***** PUT/opdater ***************************************
// ************************************************************
// denne er inspireret fra ninja-webapitut
// myRoutes.put("/update/:id", function (req, res, next) {
myRoutes.route("/opdaterdyr/:id").put(function(req, res) {
  MitDyr.findById(req.params.id, function(err, dyrfundet) {
    if (!dyrfundet) {
      res.status(400).send("Dyret blev ikke fundet");
    } else if (err) {
      res.json("Der er sket en fejl: ", err);
    } else {
      dyrfundet.dyrenavn = req.body.dyrenavn;
      dyrfundet.dyremad = req.body.dyremad;
      dyrfundet.dyretsvaegt = req.body.dyretsvaegt;

      dyrfundet
        .save()
        .then(d => {
          res.json("Dyret er opdateret");
        })
        .catch(err => {
          res.status(400).send("Fejl ...Dyret er ikke blevet opdateret");
        });
    }
  });
});

// ***** DELETE
// ************************************************************
//todoRoutes.delete("/delete/:id", function (req, res, next) {

myRoutes.route("/sletdyr/:id").delete(function(req, res) {

    MitDyr.deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
            res.json("Der er sket en fejl: " + err)
        } else if (result.deletedCount <= 0) {
            res.json("Der blev ikke slettet noget dyr");
        } else {
            res.json("Antal slettet dyr: " + result.deletedCount);
        }
    }).catch(function(){
        console.log("noget gik galt, evt med forbindelsen til DB")
    });

});
