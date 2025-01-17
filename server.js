const express = require('express');
const bodyParser =require('body-parser');
const mongodb = require('./data/database');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', require('./routes/index'));
app.use(bodyParser.json());


mongodb.initDB((err) => {
    if (err) {
        console.log(err);
    } 
    else {
        app.listen(port,  () => (console.log(`Database is listening. Node running on port ${port}`)));
    }
});



