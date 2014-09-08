var express = require('express');
var consts = require('../../constants');
var router = express.Router();

router.get('/', function(req,res){
	res.render('main',{consts:consts});
});

module.exports = router;