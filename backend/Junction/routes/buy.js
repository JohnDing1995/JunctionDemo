var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'

var db = mongoose.connect(DB_URL)


/* add a transfer. */
router.post('/', function(req, res, next) {

    var name = req.quary.name
    var amount = req.query.amount

    User.findOne({'name':from}, function(err, payer){
      console.log(payer.balance)
      if(err) res.status(500).send(err)
      if(payer.balance - amount < 0){
          res.status(400)
      }
      payer.balance = parseFloat(payer.balance)-parseFloat(amount)
      payer.save(function(err){ if(err) res.status(500).send({'message': err})})

      res.json({
        message: 'Paid'
        name: payer.name
        balance: payer.balance
      })
    });
})



module.exports = router;
