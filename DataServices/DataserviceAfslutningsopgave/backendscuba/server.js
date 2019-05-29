const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const produktRoutes = express.Router();
var multer = require("multer");
const PORT = 4010;
let Produkt = require("./produkt.model");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/produkts", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established :)");
});

produktRoutes.route("/").get(function(req, res) {
  Produkt.find(function(err, produkts) {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
      res.json(produkts);
    }
  });
});

produktRoutes.route("/:id").get(function(req, res) {
  let id = req.params.id;
  Produkt.findById(id, function(err, produkt) {
    res.json(produkt);
  });
});

produktRoutes.route("/add").post(function(req, res) {
  let produkt = new Produkt(req.body.produkt);
  produkt
    .save()
    .then(produkt => {
      res.status(200).json({ produkt: "produkt added successfully" });
    })
    .catch(err => {
      res.status(400).send("adding new produkt failed!");
    });
});

produktRoutes.route("/update/:id").put(function(req, res) {
  Produkt.findById(req.params.id, function(err, produkt) {
    if (!produkt) res.status(404).send("Data is not found");
    else produkt.produkt_navn = req.body.produkt_navn;
    produkt.produkt_beskrivelse = req.body.produkt_beskrivelse;
    produkt.produkt_pris = req.body.produkt_pris;
    produkt.produkt_foto = req.body.produkt_foto;

    produkt
      .save()
      .then(produkt => {
        res.json("Produkt updated");
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
});

produktRoutes.route("/delete/:id").delete(function(req, res) {
  Produkt.deleteOne({ _id: req.params.id }, function(err, result) {
    if (err) {
      res.json("Der er sket en fejl: " + err);
    } else if (result.deletedCount <= 0) {
      res.json("Der blev ikke slettet nogen Produkter");
    } else {
      res.json("Antal slettet produkter: " + result.deletedCount);
    }
  }).catch(function() {
    console.log("noget gik galt, evt med forbindelsen til DB");
  });
});

app.use("/produkts", produktRoutes);

// Upload
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/Pic");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

var upload = multer({ storage: storage }).single("file");

produktRoutes.post("/upload", function(req, res) {
  upload(req, res, function(err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(555).json(err);
    }

    let prod = JSON.parse(req.body.produkt);
    console.log(prod);

    let nytprodukt = new Produkt(prod);

    nytprodukt.save(err => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send("Der er sket en fejl");
      }
    });
    console.log("ny: " + nytprodukt, req.file);
    return res
      .status(200)
      .send(
        "nyt produkt oprettet: " +
          nytprodukt +
          "og filen er gemt i DB :" +
          req.file
      );
  });
});

app.listen(PORT, function() {
  console.log("server is running on port: " + PORT);
});
