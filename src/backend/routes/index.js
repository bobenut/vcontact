var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('***************come in**********')
  res.sendfile('../public/index.html');
});

module.exports = router;