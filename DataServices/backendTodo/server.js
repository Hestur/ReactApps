const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const todoRoutes = express.Router();
const PORT = 4001;

let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open', function(){
    console.log('MongoDB database connection established :)');
})

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todos) {
        if (err){
            console.log(err);
        } else {
            console.log(res);
            res.json(todos);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id
    Todo.findById(id, function(err, todo){
        res.json(todo);
    });
});


todoRoutes.route('/add').post(function(req, res){
    let todo = new Todo(req.body);
    todo.save()
    .then(todo => {
        res.status(200).json({'todo': 'todo added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new todo failed!');
    });
});

todoRoutes.route('/update/:id').put(function(req, res) {
    Todo.findById(req.params.id, function(err, todo){
        if (!todo)
        res.status(404).send('Data is not found');
        else 
        todo.todo_description = req.body.todo_description;
        todo.todo_responsible = req.body.todo_responsible;
        todo.todo_priority = req.body.todo_priority;
        todo.todo_completed = req.body.todo_completed;

        todo.save().then(todo => {
            res.json('Todo updated');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });
    })
})

todoRoutes.route("/delete/:id").delete(function(req, res) {

    Todo.deleteOne({_id: req.params.id}, function(err, result){
        if (err) {
            res.json("Der er sket en fejl: " + err)
        } else if (result.deletedCount <= 0) {
            res.json("Der blev ikke slettet nogen Todo");
        } else {
            res.json("Antal slettet Todos: " + result.deletedCount);
        }
    }).catch(function(){
        console.log("noget gik galt, evt med forbindelsen til DB")
    });

});

app.use('/todos', todoRoutes);

app.listen(PORT, function() {
    console.log("server is running on port: " + PORT);
});