var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("타는지 확인");
  res.render('index', { title: 'Express' });
});

module.exports = router;
