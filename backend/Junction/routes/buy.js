var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'
var Transfer = require('../models/transferModel')
var User = require('../models/userModel')
var db = mongoose.connect(DB_URL)


/* buy something. */
router.post('/', function(req, res, next) {

    var name = req.query.name
    var amount = req.query.amount

    User.findOne({'name':name}, function(err, payer){
      console.log(payer.balance)
      if(err) res.status(500).send(err)
      if(payer.balance - amount < 0){
          res.status(400)
      }
      payer.balance = parseFloat(payer.balance)-parseFloat(amount)
      payer.save(function(err){ if(err) res.status(500).send({'message': err})})
      var newTrans = Transfer({from:name, to:"merchant", amount: amount})
      newTrans.save(function(err){
          if(err) res.status(500)
      })
      res.json({
        message: 'Paid',
        name: payer.name,
        balance: payer.balance
      })
    });
})




module.exports = router;
