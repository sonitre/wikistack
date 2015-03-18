var express = require('express');
var router = express.Router();

router.get('/:title', function(req, res, next) {
	var page = require('../models/').Page;
  var title = req.params.title;
 	 
 page.findOne({url_name: title}, function(err,pageData){
 		
 		res.render('page', { doc: pageData});
 		}); 
 });

module.exports = router;