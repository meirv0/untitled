var express = require('express');
var router = express.Router();


var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/test';






router.get('/addBoard', function(req, res) {
    
    MongoClient.connect(url, function(err, db){
        if(err){
            console.log('err', err);
        }else {
            db.collection('boardsApp').save(req.body, function (err, docsInserted) {
                if(err){
                    console.log('err', err);
                }else {
                    res.writeHead(200, {"Content-Type": "application/json"});
                    res.end("" + docsInserted.ops[0]._id);
                }
            });
        }
  })
});


router.get('/addList', function(req, res) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id, function (err) {
         if(err){
             console.log('err', err);
         }else {
             result.list.push(req.body.list);
             db.collection('boardsApp').save(result, function (err, docsInserted) {
                 if(err){
                     console.log('err', err);
                 }else {
                     res.writeHead(200, {"Content-Type": "application/json"});
                     res.end("" + docsInserted.ops[0].list[0]._id);
                 }
             });
         }
     })});

  })
});


router.get('/addTask', function(req, res) {
   MongoClient.connect(url, function(err, db){

       var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id, function (err) {
           if(err){
               console.log('err', err);
           }else {
               result.list.tasks.push(req.body.task);
               db.collection('boardsApp').save(result, function (err, docsInserted) {
                   if(err){
                       console.log('err', err);
                   }else {
                       res.writeHead(200, {"Content-Type": "application/json"});
                       res.end("" + docsInserted.ops[0].list[0].tasks[0]._id);
                   }
               });
           }
       })});

  })
});


router.get('/removeBoard', function(req, res) {
   MongoClient.connect(url, function(err, db){
      db.collection('boardsApp').deleteOne({_id: ObjectId(req.body._id, function (err) {
          if(err){
              console.log('err', err);
          }else {
              res.writeHead(200, {"Content-Type": "application/json"});
              res.end("ok");
          }
      })});
   })
});


router.get('/removeList', function(req, res) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id, function (err) {
         if(err){
             console.log('err', err);
         }else {
             result.list.splice(req.body.index, 1);
             db.collection('boardsApp').save(result, function (err) {
                 if(err){
                     console.log('err', err);
                 }else {
                     res.writeHead(200, {"Content-Type": "application/json"});
                     res.end("ok");
                 }
             });
         }
     })});

  })
});


router.get('/removeTask', function(req, res) {
   MongoClient.connect(url, function(err, db){
     var result = db.collection('boardsApp').find({_id: ObjectId(req.body._id, function (err) {
         if(err){
             console.log('err', err);
         }else {
             result.list.tasks.splice(req.body.index, 1);
             db.collection('boardsApp').save(result, function (err) {
                 if(err){
                     console.log('err', err);
                 }else {
                     res.writeHead(200, {"Content-Type": "application/json"});
                     res.end("ok");
                 }
             });
         }
     })});

  }) 
});


router.get('/getBords', function(req, res) {
    var result = db.collection('boardsApp').find({}, function (err) {
        if(err){
            console.log('err', err);
        }else {
            res.writeHead(200, {"Content-Type": "application/json"});
            var json = JSON.stringify(result);
            res.end(json);
        }
    });

});

module.exports = router;
