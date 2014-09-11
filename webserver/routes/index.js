var express = require('express');
var ds = require('../../data/datascheme');
var consts = require('../../constants');
var save = require('../../data/save.js');
var load = require('../../data/load.js');
var router = express.Router();

router.get('/', function(req,res){
	res.render('main',{consts:consts});
});

router.post('/save',function(req,res){
	save(req.query.type,req.body,function(err,type,content){
		res.end(JSON.stringify({
			err:err
		}));
	});
});

router.post('/load',function(req,res){
	load('town',req.body,function(err,type,content){
		console.log(content);
		res.end(JSON.stringify({
			err:err,
			content:content
		}));
	});
});
module.exports = router;