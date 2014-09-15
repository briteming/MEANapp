var express = require('express');
var ds = require('../../data/datascheme.json');
var router = express.Router();

ds.string = JSON.stringify(ds)

router.get('/datascheme', function(req,res){
	res.end(ds.string);
});

module.exports = router;