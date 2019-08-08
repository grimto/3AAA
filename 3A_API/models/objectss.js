
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Objectss = new Schema({
  _id:{
    type: String,
  },
  _name: {
    type: String,
  },
  _paragraph: {
    type: String,
  }
},{
  collection: 'objectss'
});

module.exports = mongoose.model('Objectss', Objectss);
