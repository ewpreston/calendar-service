/*global desc:false, task:false, namespace: false, complete: false, fail: false, jake: false*/

/**
 * JSHint
 */
desc('Run JSHint against all js files (except 3rd party scripts)');
task('jshint', function () {
  jake.exec([
    'node node_modules/.bin/jshint .'
  ], function () {
    console.log('No JSHint problems found!');
    complete();
  }, {stdout:true});
}, {async:true});

