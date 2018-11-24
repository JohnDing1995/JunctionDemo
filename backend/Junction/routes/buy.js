var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
const DB_URL = 'mongodb://localhost:27017/junction'

var db = mongoose.connect(DB_URL)

/* buy something. */
router.post('/', function(req, res, next) {
  
});

module.exports = router;
