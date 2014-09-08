var express = require('express');
var ds = require('../../datascheme');
var consts = require('../../constants');
var router = express.Router();

router.get('/', function(req,res){
	res.render('main',{consts:consts,ds:ds});
});

module.exports = router;