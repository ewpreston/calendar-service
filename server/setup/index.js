/**
 * Set up the application.
 *
 * @param app The express app
 */
module.exports = function(app) {
  // Set up app logging
  require('./logging')(app);
};
