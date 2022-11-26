const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const User = require('./models/user.model');
const Todo = require('./models/todo.model');
const mongoose = require('./config/mongoose');
mongoose.connect();

let port = 3500;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// listen to requests
app.listen(port, () => console.info(`server started on port ${port}`));

app.get('/todo/:userId', async function (req, res) {
    let todo = await Todo.findOne({ user: req.params.userId });
    res.send('your todo is: ' + todo.todo);
});
app.put('/todo/:userId', async function (req, res) {
    let todo = await Todo.findOne({ user: req.params.userId });
    todo.todo = req.body.todo;
    await todo.save();
    res.send('your todo is updated');
})
app.post('/todo/:userId', async function (req, res) {
    let user = await User.findOne({ _id: req.params.userId });
    let todo = new Todo();
    todo.user = user._id;
    todo.todo = req.body.todo;
    await todo.save();
    res.send('your todo is added');
})
app.delete('/todo/:userId', async function (req, res) {
    await Todo.deleteOne({ user: req.params.userId, todo: req.body.todo });
    res.send('your todo is deleted');
})
module.exports = app;
