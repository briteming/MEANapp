var express = require('express');
var ds = require('../../datascheme');
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
module.exports = router;