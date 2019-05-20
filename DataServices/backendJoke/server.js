const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const JokeRoutes = express.Router();
const PORT = 4000;

var Joke = require('./joke.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Joke', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established :)');
})

JokeRoutes.route('/').get(function(req, res) {
    Joke.find(function(err, j) {
        if (err){
            console.log("fejl", err);
        } else {
            res.json(j);
            // res.json("Hej")
        }
    });
});

JokeRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    Joke.findById(id, function(err, Joke){
        res.json(Joke);
    });
});


JokeRoutes.route('/add').post(function(req, res){
    let joke = new Joke(req.body);
    joke.save()
    .then(Joke => {
        res.status(200).json({'Joke': 'Joke added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new Joke failed!');
    });
}); 

JokeRoutes.route('/update/:id').put(function(req, res) {
    Joke.findById(req.params.id, function(err, Joke){
        if (!Joke)
        res.status(404).send('Data is not found');
        else 
        Joke.joke_Heading = req.body.joke_Heading;
        Joke.joke_Content = req.body.joke_Content;
        Joke.joke_Stars = req.body.joke_Stars;
        Joke.joke_Date = req.body.joke_Date;
        Joke.joke_completed = req.body.joke_completed;

        Joke.save().then(Joke => {
            res.json('Joke updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    })
})

JokeRoutes.route("/delete/:id").delete(function(req, res) {

    Joke.deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
            res.json("Der er sket en fejl: " + err)
        } else if (result.deletedCount <= 0) {
            res.json("Der blev ikke slettet nogen Joke");
        } else {
            res.json("Antal slettet Jokes: " + result.deletedCount);
        }
    }).catch(function(){
        console.log("noget gik galt, evt med forbindelsen til DB")
    });

});

app.use('/Joke', JokeRoutes);

app.listen(PORT, function() {
    console.log("server is running on port: " + PORT);
});