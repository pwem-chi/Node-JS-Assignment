const express = require('express');
const router = express.Router();


//get request for the sum of array
router.get('/Summation', function(req, res){
    const arr = req.body.array;
    const add = (a,b) =>
      a + b
     
       const sum = arr.reduce(add);
    
   
   res.send({result: sum});
});

//get request for the difference of array
router.get('/Difference', function(req, res){
    const arr = req.body.array;
    const sub = (a,b) =>
      a - b

      const diff = arr.reduce(sub);

    res.send({result: diff});
}); 

//get request for the product of array
router.get('/Product', function(req, res){
    const arr = req.body.array;
    const mult = (a,b) =>
      a * b

      const prod = arr.reduce(mult);
    
    res.send({result: prod});
});

//get request for the quotient of array
router.get('/Quotient', function(req, res){
    const arr = req.body.array;
    const div = (a,b) =>
      a / b

      const quo = arr.reduce(div);
    
    res.send({result: quo});
});
   
        


module.exports = router;
