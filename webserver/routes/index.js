var express = require('express');
var router = express.Router();

router.get('none', function(req,res) {
	
});

router.get('index', function(req,res){
	res.render('index',{title:'Express'});
});

module.exports = router;