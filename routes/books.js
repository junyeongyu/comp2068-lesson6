"use strict";
var express = require('express');
var router = express.Router();

// link to the book model for CRUD operations
let Book = require('../models/book')

/* GET home page. */
router.get('/', function(req, res, next) {
	
	// use mongoose model to query mongodb for all books
	Book.find(function(err, books) {
		if (err) {
			console.log(err);
			res.end(err);
			return;
		}
		
		// no error so send the books to the index view
		res.render('books/index', {
			books: books
		});
	});

});

module.exports = router;