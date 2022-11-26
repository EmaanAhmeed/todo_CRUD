const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  todo: String 
}, {
  timestamps: true,
});

module.exports = mongoose.model('Todo', schema);