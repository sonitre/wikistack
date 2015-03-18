var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	var url = req.url;
  res.render('page_builder', { title: 'Page Builder', url: url });
});

router.post('/submit', function(req, res) {

	var models = require('../models/');
	var re = /[^A-Za-z0-9_ ]/g;
	var re2 = /\s/g;

	var title = req.body.title;
	var url_name = title.replace(re2, "_").replace(re,"");
	console.log("URL name" + url_name);
	var body = req.body.body;
	var tags = req.body.tags.replace(/,/g, "").split(" ");
	

  var p = new models.Page({ "title": title, "body":body, "url_name":url_name, "tags": tags });
  p.save();
  res.redirect('/');
});

module.exports = router;
