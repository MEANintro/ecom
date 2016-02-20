var express = require('express');
var wagner = require('wagner-core');

require('./models')(wagner);
require('./dependencies')(wagner);

var app = express();

wagner.invoke(require('./auth'), { app: app });

app.use('/api/v1', require('./api')(wagner));

app.listen(3000);
console.log('Listening on port 3000!');





// var mongoose = require('mongoose');
// var schema = require('./schema');

// mongoose.connect('mongodb://localhost:27017/test');

// var User = mongoose.model('User', schema, 'users');

// var user = new User({
//   name: 'John Smith',
//   email: 'john@smith.io'
// });

// user.save(function(err) {
//   if(err) {
//     console.log(error);
//     process.exit(1);
//   }
//   User.find({email: 'john@smith.io'}, function(err, docs) {
//     if(err) {
//       console.log(err);
//       process.exit(1);
//     }
//     console.log(require('util').inspect(docs));
//     process.exit(0);
//   });
// });
