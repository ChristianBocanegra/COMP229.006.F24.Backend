module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Products' });
});

router.get('/apple', function(req, res, next) {
  res.send('Hello Apple fanboy!');
});

module.exports = router;
