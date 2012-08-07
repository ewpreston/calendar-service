/**
 * Calendar actions
 */

/**
 * Get the calendar data for a user
 *
 * @param req Request
 * @param res Response
 */
exports.view = function (req, res) {
  var id = req.params.id;
  var calendarData = { 'events':[
    {'id':id, 'courseId':'BIO101', 'courseName':'Intro to Biology', 'due':'6/3/2012', 'title':'Bio Assignment 33', 'url':'http://google.com'},
    {'id':id, 'courseId':'CS201', 'courseName':'Node Programming', 'due':'6/15/2012', 'title':'Hello World', 'url':'http://yahoo.com'}
  ]
  };

  // return JSON calendar data here
  res.json(calendarData);
};
