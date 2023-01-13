require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();


app.listen(process.env.PORT, ()=>{
    console.log('API on');
});

app.use(cors())

//localhost:5000/
app.get('/', (req, res) => {
    res.send('Hola Mundo');
});

//Collections

//localhost:5000/users
app.use('/users', require('../src/routers/users.routers.js'));

//localhost:5000/shopping
app.use('/shopping', require('../src/routers/sales.routers'))