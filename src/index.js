require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const {dbConnection} = require('./config/db');
dbConnection();

app.listen(process.env.PORT, ()=>{
    console.log(`API on. Connected port: ${process.env.PORT}`);
});

app.use(cors())

//localhost:5000/
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

//Collections

//localhost:5000/users
app.use('/users', require('../src/routers/users.routers.js'));

//localhost:5000/products
app.use('/products', require('../src/routers/products.routers'))