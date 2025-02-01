const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json())
    .use((req,res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    )
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next();
});
app.use('/', require('./routes'));


mongodb.initDB((err) => {
    if (err) {
        console.log(err);
    } 
    else {
        app.listen(port,  () => (console.log(`Database is listening. Node running on port ${port}`)));
    }
});



