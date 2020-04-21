const mongoose = require("mongoose");

const storeSchema = new mongoose.Schema({
  busname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  shopname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  address: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  ownname: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  city: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  state: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  zip: {
    type: Number,
    required: true,
    minlength: 6,
    maxlength: 6,
  },
  shopdesc: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 1000,
  },
  shopcontact: {
    type: Number,
    required: true,
    minlength: 10,
    maxlength: 10,
  },
  email: {
    type: String,
    required: true,
    minlength: 10,
    maxlength: 100,
  },
  merchent_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Stores = mongoose.model("Stores", storeSchema);

module.exports = Stores;
