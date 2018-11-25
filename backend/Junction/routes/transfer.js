var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'

var db = mongoose.connect(DB_URL)
var Transfer = require('../models/transferModel')
var User = require('../models/userModel')


/* GET all transfer. */
router.get('/', function(req, res, next) {
  Transfer.find(function(err, result){
    res.json(result)
  })
});

/* add a transfer. */
router.post('/', function(req, res, next) {
    var amount = req.query.amount
    var from = req.query.from
    var to =  req.query.to
    console.log(from, to)
    User.findOne({'name':from}, function(err, payer){
      
      if(!payer) res.status(404).send({'message': 'cannot find user'})
      if(err) res.status(500).send(err)
      if(payer.balance - amount < 0){
          res.status(400)
      }
      payer.balance = parseFloat(payer.balance)-amount
      payer.save(function(err){ if(err) res.status(500).send({'message': err})})
      var newTrans = Transfer()
      newTrans.from = from
      newTrans.to = to
      newTrans.amount = amount
      newTrans.save(function(err){if(err) res.status(500).send(err)})
      
      res.json({
        message: 'Transferred', 
        from: from,
        to:to,
        amount:amount
      })
    });
    User.findOne({'name':to}, function (err, payee) {
      if(err) res.status(500).send({'message': err})
      console.log(payee.balance)
      payee.balance = parseFloat(payee.balance)+parseFloat(amount)

      payee.save(function(err){ 
        if(err) res.status(500).send({'message': err})
      }
      )
      
    })
})
    

module.exports = router;
