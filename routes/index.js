var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lesson 6', message: 'Some message here' });
});

/* GET register */
router.get('/register', function(req, res, next) {
	// load the register.ejs view
	res.render('register');
});

module.exports = router;