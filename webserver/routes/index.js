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
	if(req.body && (req.body.type == 'town' || req.body.type == 'village')){
		load(req.body.type,{r1:req.body.name},function(err,type,content){
			res.end(JSON.stringify({
				err:err,
				content:content
			}));
		});
	}else{
		debug.exception("receved a post with no type");
		res.end(JSON.stringify({
			err: "no type submit!"
		}));
	}
});
module.exports = router;