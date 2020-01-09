const express = require('express');
const bodyParser = require('body-parser');

//set up express app
const app = express();

app.use(bodyParser.json());

//initialise routes
app.use('/api', require('./routing/api'))

app.listen(process.env.port || 6969, function(){
    console.log("now listening for requests");
});