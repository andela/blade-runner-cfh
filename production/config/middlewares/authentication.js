'use strict';

var jwt = require('jsonwebtoken'),
    mongoose = require('mongoose'),
    dotenv = require('dotenv'),
    User = mongoose.model('User');

dotenv.config();

var secret = process.env.JWT_SECRET;
/**
* @description function to decoded user details
* @param {*} req
* @param {*} res
* @param {*} next
* @return {*} return
*/
exports.verifyUser = function (req, res, next) {
  var token = req.headers['x-access-token'] || req.headers.token;
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'Not Authorized'
    });
  }
  jwt.verify(token, secret, function (error, decoded) {
    if (error) {
      return res.status(401).send({
        success: false,
        message: 'Invalid token'
      });
    }
    req.decoded = decoded;
    next();
  });
};
/**
* @description validate user input
* @param {object} req
* @param {object} res
* @param {*} next
* @return {object} validated response
*/
exports.validateInput = function (req, res, next) {
  req.checkBody({
    name: {
      notEmpty: {
        options: true,
        errorMessage: 'name field cannot be empty'
      },
      isLength: {
        options: [{ min: 3 }],
        errorMessage: 'Name should be atleast three characters'
      },
      matches: {
        options: [/^[A-Za-z][^ ]+( [^]+)*$/g],
        errorMessage: 'Invalid name, ensure you name contain only alphabets'
      }
    },
    email: {
      notEmpty: {
        options: true,
        errorMessage: 'Email field cannot be empty'
      },
      isEmail: {
        errorMessage: 'Please input a valid Email address'
      }
    },
    password: {
      notEmpty: {
        options: true,
        errorMessage: 'Password field cannot be empty'
      },
      isLength: {
        options: [{ min: 8 }],
        errorMessage: 'Please input a valid password with atleast 8 characters'
      }
    },
    username: {
      notEmpty: {
        options: true,
        errorMessage: 'Username field cannot be empty'
      },
      isLength: {
        options: [{ min: 6 }],
        errorMessage: 'Please input a valid user with atleast 6 characters'
      }
    }
  });
  var errors = req.validationErrors();
  if (errors) {
    var allErrors = [];
    errors.forEach(function (error) {
      allErrors.push({
        message: error.msg,
        field: error.param
      });
    });
    return res.status(400).send({ errors: allErrors });
  }
  next();
};

/**
* @description check if email already exist
* @param {object} req
* @param {object} res
* @param {*} next
* @return {object} error message
*/
exports.checkEmail = function (req, res, next) {
  return User.findOne({
    email: req.body.email
  }).then(function (email) {
    if (email) {
      return res.status(409).send({
        errors: [{
          field: 'email',
          message: 'Email has already be chosen'
        }]
      });
    }
    next();
  }).catch(function (error) {
    return res.status(400).send(error);
  });
};

/**
* @description check if username already exist
* @param {object} req
* @param {object} res
* @param {*} next
* @return {object} error message
*/
exports.checkUsername = function (req, res, next) {
  return User.findOne({
    username: req.body.username
  }).then(function (users) {
    if (users) {
      return res.status(409).send({
        errors: [{
          field: 'username',
          message: 'Username has already been chosen'
        }]
      });
    }
    next();
  });
};