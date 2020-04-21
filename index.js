const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv/config');
const cors = require('cors');

const store = require('./routes/stores');

app.use(bodyparser.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true ,
        useUnifiedTopology: true
    })
    .then(() => console.log('Database Connected'))
    .catch(err => console.log(err));

app.use('/stores', store); 

app.get('/', (req, res) => {
    res.send("Hello World");
}); 

const PORT = process.env.PORT || '3001';

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});