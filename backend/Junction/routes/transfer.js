var express = require('express');
var router = express.Router();
var transfers = require('../transfers')
var users = require('../users')
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'

var db = mongoose.connect(DB_URL)
var Transfer = require('../models/transferModel')
var User = require('../models/userModel')


/* GET all transfer. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* add a transfer. */
router.post('/', function(req, res, next) {
    var amount = req.body.amount
    var from = req.body.from
    var to =  req.body.to
    User.find({'name':from}, function(err, res){
      if(res.balance - amount >= 0){
        
      }
    })

});

module.exports = router;
