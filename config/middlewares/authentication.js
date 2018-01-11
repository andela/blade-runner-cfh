const jwt = require('jsonwebtoken'),
  mongoose = require('mongoose'),
  dotenv = require('dotenv'),
  User = mongoose.model('User');

dotenv.config();

const secret = process.env.JWT_SECRET;
/**
* @description function to decoded user details
* @param {*} req
* @param {*} res
* @param {*} next
* @return {*} return
*/
exports.verifyUser = function (req, res, next) {
  const token = req.headers['x-access-token'] || req.headers.token;
  if (!token) {
    return res.status(403).send({
      success: false,
      message: 'Not Authorized'
    });
  }
  jwt.verify(token, secret, (error, decoded) => {
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
        options: [(/^[A-Za-z][^ ]+( [^]+)*$/g)],
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
      },
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
  const errors = req.validationErrors();
  if (errors) {
    const allErrors = [];
    errors.forEach((error) => {
      allErrors.push({
        message: error.msg,
        field: error.param
      });
    });
    return res.status(400).send({ errors: allErrors });
  }
  next();
};

exports.validateUserSignin = function (req, res, next) {
  if (!req.body.email) {
    return res.status(400).send({
        message: 'email field cannot be empty'
    });
  }
  if (!req.body.password) {
    return res.status(400).send({
        message: 'Password field cannot be empty'
    });
  }
  return User.findOne({
    email: req.body.email
  }).then((user) => {
    if (!user) {
      return res.status(400).send({
          message: 'Incorrect Login details'
      });
    }
    if (bcrypt.compareSync(req.body.password, user.hashed_password)) {
      next();
    } else {
      res.status(400).send({
          message: 'Incorrect Login details'
      });
    }
  });
}

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
  }).then((email) => {
    if (email) {
      return res.status(409).send({
        errors: [{
          field: 'email',
          message: 'Email has already be chosen'
        }]
      });
    }
    next();
  }).catch(error => res.status(400).send(error));
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
  }).then((users) => {
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
