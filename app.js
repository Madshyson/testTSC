var express = require('express')

const mongoose = require('mongoose');
const app = express();


app.get('/', (req, res) => {
    res.send('Hello World');
});

require('./endpoints')(app);

app.listen(3000, () => {
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function() {
        console.log('API du test the seed crew online -- connecté à mongo');
    });
});