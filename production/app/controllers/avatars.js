'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * List of Avatars
 */
var avatars = ['/img/chosen/E01.png', '/img/chosen/F01.png', '/img/chosen/FA04.png', '/img/chosen/FB03.png', '/img/chosen/FC01.png', '/img/chosen/FD01.png', '/img/chosen/FE01.png', '/img/chosen/FH03.png', '/img/chosen/FI02.png', '/img/chosen/H01.png', '/img/chosen/J01.png', '/img/chosen/M05.png', '/img/chosen/N02.png', '/img/chosen/N03.png', '/img/chosen/N04.png', '/img/chosen/N05.png'];

var allJSON = exports.allJSON = function allJSON() {
  return res.jsonp(avatars.slice(0, 12));
};
var all = exports.all = function all() {
  return avatars;
};