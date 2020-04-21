const Store = require('../models/stores');
const mongoose = require('mongoose');

const getAllStores = (req, res) => {
    Store.find({})
        .then((stores) => {
            res.send(stores);
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Error while creating your store'
            });
        });
    
}

const addStore = (req, res) => {
    let obj = {
        busname: req.body.busname,
        shopname: req.body.shopname,
        address: req.body.address,
        ownname: req.body.ownname,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        shopdesc: req.body.shopdesc,
        shopcontact: req.body.shopcontact,
        email: req.body.email,
        merchent_id:  new mongoose.mongo.ObjectId(req.body.merchent_id)
    };
    Store.create(obj)
        .then((result) =>{
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send({
                error: 'Error while creating your store',
                err
            });
        });
}

const getStore =  (req, res) => {
    Store.findOne({ _id:req.params.id })
        .then((stores) => {
            res.send(stores);
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Error while creating your store'
            });
        });
}

module.exports = {
    getAllStores,
    getStore,
    addStore
}