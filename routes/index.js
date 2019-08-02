var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Chat prueba Moons - Christian Buendia' });
});


module.exports = router;
