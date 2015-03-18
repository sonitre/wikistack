var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	var page = require('../models/').Page;

	page.find(function(err,pages){
		console.log(pages);
		res.render('index', { title: 'Express', docs: pages });
	});

  
});



module.exports = router;
