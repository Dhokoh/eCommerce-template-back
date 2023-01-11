const express = require('express');


const app = express();


app.listen(4000, ()=>{
    console.log('API on');
});

app.get('/', (req, res) => {
    res.send('Hola Mundo');
});