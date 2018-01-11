'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Module dependencies.
 */

/**
 * Redirect users to /#!/app (forcing Angular to reload the page)
 * @param {obj} req express request object
 * @param {obg} res express response object
 * @returns {redirect} redirect user
 */
var play = exports.play = function play(req, res) {
  if (Object.keys(req.query)[0] === 'custom') {
    res.redirect('/#!/app?custom');
  } else {
    res.redirect('/#!/app');
  }
};

var render = exports.render = function render(req, res) {
  res.render('index', {
    user: req.user ? JSON.stringify(req.user) : 'null'
  });
};