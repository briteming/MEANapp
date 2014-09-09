var express = require('express');
var ds = require('../../datascheme');
var consts = require('../../constants');
var router = express.Router();

router.get('/', function(req,res){
	res.render('main',{consts:consts});
});

router.post('/save',function(req,res){
	res.end(req.body.t8);
});
module.exports = router;