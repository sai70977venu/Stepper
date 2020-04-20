const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  location : {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  owner_name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  },
  contact_no: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 10
  }
});

const Stores = mongoose.model('Stores', storeSchema);

module.exports = Stores;