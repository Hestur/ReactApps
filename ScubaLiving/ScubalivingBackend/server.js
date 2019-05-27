const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const FeedbackRoutes = express.Router();
const PORT = 4000;

var Feedback = require('./Feedback.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Feedback', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established :)');
})

FeedbackRoutes.route('/').get(function(req, res) {
    Feedback.find(function(err, j) {
        if (err){
            console.log("fejl", err);
        } else {
            res.json(j);
            // res.json("Hej")
        }
    });
});

FeedbackRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    Feedback.findById(id, function(err, Feedback){
        res.json(Feedback);
    });
});


FeedbackRoutes.route('/add').post(function(req, res){
    let feedback = new Feedback(req.body);
    feedback.save()
    .then(Feedback => {
        res.status(200).json({'Feedback': 'Feedback added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new Feedback failed!');
    });
}); 

FeedbackRoutes.route('/update/:id').put(function(req, res) {
    Feedback.findById(req.params.id, function(err, Feedback){
        if (!Feedback)
        res.status(404).send('Data is not found');
        else 
        Feedback.feedback_Heading = req.body.feedback_Heading;
        Feedback.feedback_Navn = req.body.feedback_Navn;
        Feedback.feedback_Comment = req.body.feedback_Comment;
        Feedback.feedback_Stars = req.body.feedback_Stars;
        Feedback.feedback_Date = req.body.feedback_Date;
        Feedback.feedback_Mail = req.body.feedback_Mail;

        Feedback.save().then(Feedback => {
            res.json('Feedback updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    })
})

FeedbackRoutes.route("/delete/:id").delete(function(req, res) {

    Feedback.deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
            res.json("Der er sket en fejl: " + err)
        } else if (result.deletedCount <= 0) {
            res.json("Der blev ikke slettet nogen Feedback");
        } else {
            res.json("Antal slettet Feedbacks: " + result.deletedCount);
        }
    }).catch(function(){
        console.log("noget gik galt, evt med forbindelsen til DB")
    });

});

app.use('/Feedback', FeedbackRoutes);

app.listen(PORT, function() {
    console.log("server is running on port: " + PORT);
});