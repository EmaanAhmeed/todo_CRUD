const User = require("./models/user.model");
const mongoose = require("mongoose");
const users = [
    new User({
        name: "test"
    }),]
//connect mongoose
mongoose
    .connect('mongodb://127.0.0.1:27017/todoDatabase')
    .catch(err => {
        console.log(err.stack);
        process.exit(1);
    })
    .then(() => {
        console.log("connected to db in development environment");
    });
//save your data. this is an async operation
//after you make sure you seeded all the products, disconnect automatically
users.map(async (u, index) => {
    await u.save((err, result) => {
        if (index === users.length - 1) {
            console.log("DONE!");
            mongoose.disconnect();
        }
    });
});