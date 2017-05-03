var express = require('express');
var router = express.Router();
var fs = require('fs');


var token;
fs.readFile('.token', (err,content)=>{
  token = content.toString();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/search', function(req,res){
  var url = "https://www.freesound.org/apiv2/search/text/?token="+token+"&query="+req.body.query;
  console.log(url);
  res.redirect('/');
})

module.exports = router;
