var controllers = require('./controllers');

/**
 * Register the routes into the app
 *
 * @param app The express app.
 */
module.exports = function (app) {
  app.get('/calendars/:id', controllers.calendar.view);
};
