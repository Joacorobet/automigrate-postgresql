var path = require('path');
var app = require(path.resolve(__dirname, '../server/server'));
var ds = app.datasources.postgres;
//change where it says postgres to your db name in loopback

ds.automigrate('*YOUR MODEL*', function(err) {
  if (err) throw err;
});
