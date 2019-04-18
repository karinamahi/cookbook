var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
/* GET users listing. */
router.get('/', function(req, res, next) {
  

  var userSchema = new mongoose.Schema({
    name: String
  });

  var User = mongoose.model('User', userSchema);

  var user = new User({ name: 'Test'});

  user.save(function(err, user){
    if(err){
      return console.error('Ops: ', err);
    }
    console.log('Welcome: ' + user.name);
  });

  res.send('hello users');
});

module.exports = router;
