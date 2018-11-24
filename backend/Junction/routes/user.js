var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'

var db = mongoose.connect(DB_URL)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
