var fs = require('fs');
var path = require('path');

/**
 * Load all of the controllers under the specified directory.
 *
 * @param dir The directory to load controllers from.
 */
function requireControllers(dir) {
  var result = {};
  var files = fs.readdirSync(dir);
  for (var i = 0; i < files.length; ++i) {
    var base = files[i];
    // Don't require self
    if (dir === __dirname && base === 'index.js') {
      continue;
    }
    // Recurse down directories, require()ing all the controllers
    var file = path.join(dir, base);
    var stat = fs.statSync(file);
    if (stat.isDirectory()) {
      result[base] = requireControllers(file);
      // Only include controllers in subdirectories
    } else if (dir !== __dirname && path.extname(base) === '.js') {
      if (base === 'index.js') {
        var idx = require(file);
        for (var k in idx) {
          result[k] = idx[k];
        }
      } else {
        result[path.basename(base, '.js')] = require(file);
      }
    }
  }
  return result;
}

module.exports = requireControllers(__dirname);

