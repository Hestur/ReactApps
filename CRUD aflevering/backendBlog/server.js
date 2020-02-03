const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const postRoutes = express.Router();
const PORT = 3000;

let Post = require('./blogpost.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/GG', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established :)');
})

postRoutes.route('/').get(function(req, res) {
    Post.find(function(err, posts) {
        if (err){
            console.log(err);
        } else {
            console.log(res);
            res.json(posts);
        }
    });
});

postRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    Post.findById(id, function(err, post){
        res.json(post);
    });
});

postRoutes.route('/vis/:id').get(function(req, res) {
    let id = req.params.id
    Post.findById(id, function(err, post){
        res.json(post);
    });
});


postRoutes.route('/add').post(function(req, res){
    let post = new Post(req.body);
    post.save()
    .then(post => {
        res.status(200).json({'post': 'post added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new post failed!');
    });
});

postRoutes.route('/update/:id').put(function(req, res) {
    Post.findById(req.params.id, function(err, post){
        if (!post)
        res.status(404).send('Data is not found');
        else 
        post.post_title = req.body.post_title;
        post.post_description = req.body.post_description;
        post.post_text = req.body.post_text;
        post.file = req.body.file;

        post.save().then(post => {
            res.json('post updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    })
})

postRoutes.route("/delete/:id").delete(function(req, res) {

    Post.deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
            res.json("Der er sket en fejl: " + err)
        } else if (result.deletedCount <= 0) {
            res.json("Der blev ikke slettet nogen post");
        } else {
            res.json("Antal slettet posts: " + result.deletedCount);
        }
    }).catch(function(){
        console.log("noget gik galt, evt med forbindelsen til DB")
    });

});

app.use('/posts', postRoutes);

app.listen(PORT, function() {
    console.log("server is running on port: " + PORT);
});