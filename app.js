const express = require('express');

//set up express app
const app = express();

//listen for requests
app.listen(process.env.port || 6969, function(){
    console.log('Confirmed, now listening to port 6969')
});