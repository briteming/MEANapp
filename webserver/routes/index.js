var express = require('express');
var ds = require('../../data/datascheme');
var consts = require('../../constants');
var debug = require('../../debug');
var save = require('../../data/save');
var load = require('../../data/load');
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
	if(req.body && req.body.type == 'town'){
		load.town({r1:req.body.name},function(err,content){
			res.end(JSON.stringify({
				err:err,
				content:content
			}));
		});
	}else{
		debug.exception("receved a post with no type (index.js - 0147)");
		res.end(JSON.stringify({
			err: "no type submit!"
		}));
	}
});
module.exports = router;