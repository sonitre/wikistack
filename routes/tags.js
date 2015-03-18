var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/search', function(req, res, next) {
  var findTag = req.query.tagSearch;
  console.log(findTag);
  var page = require('../models/').Page;

   page.find({tags: findTag}, function(err,foundDocs){
 		
 			res.render('index', { docs: foundDocs});
 		
 	});

});

module.exports = router;
