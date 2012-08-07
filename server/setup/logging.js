var config = require('ep/config');
var log4js = require('log4js');

module.exports = function () {
  log4js.configure(config.pathFromRoot('config/log4js.json'), {
    cwd: config.pathFromRoot('log')
  });

  log4js.getLogger('access').setLevel('INFO');
  if(config.env.development) {
    log4js.getLogger('console').setLevel('TRACE');
  } else {
    log4js.getLogger('console').setLevel('ERROR');
  }
};
