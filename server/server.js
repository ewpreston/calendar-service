var config = require('ep/config');
var express = require('express');
var fs = require('fs');
var path = require('path');

var portArg = process.argv[2];

// Create the app
var app = express.createServer();
// Set up the application
require('./setup')(app);
// Set up controller routes
require('./app/routes')(app);
// Start listening
app.listen(portArg || config.server.port, function (e) {
  if (!e) {
    console.log('calendar-service app listening on ' + (portArg || config.server.port || 3000));
  } else {
    console.log(e);
  }
});

// Set up a pidfile
var pidFile = config.pathFromRoot('tmp/running.pid');
try {
  if (!fs.existsSync(path.dirname(pidFile))) {
    fs.mkdirSync(path.dirname(pidFile));
  }
  fs.writeFileSync(pidFile, process.pid);
}
catch (e) {
  console.log('Could not write pid file', e.message);
}
// Remove pidfile on exit
process.on('SIGINT', function () {
  process.exit();
});
process.on('SIGKILL', function () {
  process.exit();
});
process.on('exit', function () {
  fs.unlinkSync(pidFile);
});

