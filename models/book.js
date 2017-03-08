"use strict";
let mongoose = require('mongoose');
//let app = require('../app');

// create book schema (class)
var bookSchema = new mongoose.Schema({
	title: {
		type: String,
		required: 'Title is requried'
	},
	author: {
		type: String,
		required: 'Author is required'
	},
	price: {
		type: Number,
		min: 0.01
	},
	year: {
		type: Number,
		min: 0
	}
});

// make it public
module.exports = mongoose.model('Book', bookSchema);
//module.exports = app.db.model('book-promises', bookSchema);