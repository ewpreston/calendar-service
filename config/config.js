var objectUtils = require('../server/node_modules/ep/utils').object;
var path = require('path');

/**
 * Application config
 */
var config = module.exports = {};

/**
 * Set up environment
 */
var env = config.env = {};
env[process.env.NODE_ENV || 'development'] = true;

/**
 * Helpers for manipulating paths
 */
var root = config.root = path.resolve(__dirname, '..');
var pathFromRoot = config.pathFromRoot = function (relative) {
  return path.join(root, relative);
};

/**
 * Server options
 */
config.server = {};
/*config.server.initOptions = {
 // TODO: put SSL cert stuff here ???
 };*/

/**
 * Load the customized config values from the config.json data.
 *
 * This file mostly just contains host names
 */
var configJson = require('./config.json');
try {
  var configJsonOverride = require('./config_override.json');
  objectUtils.extendDeep(configJson, configJsonOverride);
} catch (e) {
  // There's no override
}

/**
 * Override config for dev/production mode
 */
if (env.development) {
  objectUtils.extendDeep(config, configJson.development);

} else if (env.production) {
  objectUtils.extendDeep(config, configJson.production);
}
