const Store = require('../models/stores');

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
        name: req.body.name,
        location: req.body.location,
        owner_name: req.body.owner_name,
        contact_no: req.body.contact_no
    }
    let store = "Unsuccessfull";
    Store.create(obj)
        .then((result) =>{
            console.log(result);
            res.send(result);
        })
        .catch((err) => {
            res.status(500).send({
                error: 'Error while creating your store'
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