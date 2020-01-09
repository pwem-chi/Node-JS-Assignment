const express = require('express');
const router = express.Router();

router.post('/numberlist', function(req, res){
    res.send({type: 'POST'});
});

module.exports = router;