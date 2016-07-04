var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';






router.get('/addBoard', function(req, res) {
  MongoClient.connect(url, function(err, db){
    db.collection('boardsApp').save(req.body);
  })
});


router.get('/addList', function(req, res) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id)});
     result.list.push(req.body.list); 
     db.collection('boardsApp').save(result);
  })
});


router.get('/addTask', function(req, res, next) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id)});
     result.list.tasks.push(req.body.task); 
     db.collection('boardsApp').save(result);
  })
});


router.get('/removeBoard', function(req, res, next) {
   MongoClient.connect(url, function(err, db){
      db.collection('boardsApp').deleteOne({_id: ObjectId(req.body._id)});
   })
});


router.get('/removeList', function(req, res, next) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id)});
     result.list.splice(req.body.index, 1); 
     db.collection('boardsApp').save(result);
  })
});


router.get('/removeTask', function(req, res, next) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id)});
     result.list.tasks.splice(req.body.index, 1); 
     db.collection('boardsApp').save(result);
  }) 
});


router.get('/getBords', function(req, res, next) {
  var result = db.collection('boardsApp').find({});
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(result);
});

module.exports = router;
