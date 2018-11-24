var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'

var db = mongoose.connect(DB_URL)
var User = require('../models/userModel')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find(function(err, result){
    res.json(result)
  })

}).post('/', function(req, res, next) {
  user = new User()
  user.name = req.query.name
  console.log(req.query.name)
  user.balance = req.query.balance
  user.save(function(err){
    if(err) 
      res.status(500).send({message: err})
    res.json({
     name:req.query.name,
     balance: req.query.balance
    })
  })

});



module.exports = router;
