var express = require('express');
var router = express.Router();
var data = 

/* GET all transfer. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* add a transfer. */
router.post('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
