const mongoose = require('mongoose');
const mongoURI = 'mongodb://127.0.0.1:27017/todoDatabase'

// Exit application on error
mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});


/**
* Connect to mongo db
*
* @returns {object} Mongoose connection
* @public
*/
exports.connect = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } , () => {
    console.log("mongdb is connected");
  });
  return mongoose.connection;
};