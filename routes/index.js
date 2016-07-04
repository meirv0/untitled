var express = require('express');
var router = express.Router();






router.get('/addBoard', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/addList', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/addTask', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/removeBoard', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/remveList', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/removeTask', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getBoords', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
