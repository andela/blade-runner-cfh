/**
 * Module dependencies.
 */

import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import isEmail from 'validator/lib/isEmail';
import avatars from './avatars';

const secret = process.env.JWT_SECRET;
const User = mongoose.model('User');
const allAvatars = avatars.all();

/**
 * Auth callback
 */
exports.authCallback = function(req, res, next) {
  res.redirect('/chooseavatars');
};

/**
 * Show login form
 */
exports.signin = function(req, res) {
  if (!req.user) {
    res.redirect('/#!/signin?error=invalid');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
  if (!req.user) {
    res.redirect('/#!/signup');
  } else {
    res.redirect('/#!/app');
  }
};

/**
 * Logout
 */
exports.signout = function(req, res) {
  req.logout();
  res.redirect('/');
};

/**
 * Session
 */
exports.session = function(req, res) {
  res.redirect('/');
};

/** 
 * Check avatar - Confirm if the user who logged in via passport
 * already has an avatar. If they don't have one, redirect them
 * to our Choose an Avatar page.
 */
exports.checkAvatar = function(req, res) {
  if (req.user && req.user._id) {
    User.findOne({
      _id: req.user._id
    })
    .exec(function(err, user) {
      if (user.avatar !== undefined) {
        res.redirect('/#!/');
      } else {
        res.redirect('/#!/choose-avatar');
      }
    });
  } else {
    // If user doesn't even exist, redirect to /
    res.redirect('/');
  }

};

/**
 * @description function to create a new user
 * @param {object} req
 * @param {object} res
 * @returns {*} return
 */
exports.create = (req, res) => {
  const user = new User(req.body);
  user.provider = 'local';

  user.avatar = allAvatars[Math.floor(Math.random() * 12) + 1];

  user.save().then((newUser) => {
    // eslint-disable-next-line no-underscore-dangle
    const token = jwt.sign({ id: newUser._id }, secret, {
      expiresIn: '3h',
    });
    return res.status(201).send({
      message: 'User created',
      data: newUser,
      token
    });
  }).catch(error => res.status(400).send(error));
};

/**
 * Assign avatar to user
 */
exports.avatars = function(req, res) {
  // Update the current user's profile to include the avatar choice they've made
  if (req.user && req.user._id && req.body.avatar !== undefined &&
    /\d/.test(req.body.avatar) && allAvatars[req.body.avatar]) {
    User.findOne({
      _id: req.user._id
    })
    .exec(function(err, user) {
      user.avatar = allAvatars[req.body.avatar];
      user.save();
    });
  }
  return res.redirect('/#!/app');
};

exports.addDonation = function(req, res) {
  if (req.body && req.user && req.user._id) {
    // Verify that the object contains crowdrise data
    if (req.body.amount && req.body.crowdrise_donation_id && req.body.donor_name) {
      User.findOne({
        _id: req.user._id
      })
      .exec(function(err, user) {
        // Confirm that this object hasn't already been entered
        var duplicate = false;
        for (var i = 0; i < user.donations.length; i++ ) {
          if (user.donations[i].crowdrise_donation_id === req.body.crowdrise_donation_id) {
            duplicate = true;
          }
        }
        if (!duplicate) {
          console.log('Validated donation');
          user.donations.push(req.body);
          user.premium = 1;
          user.save();
        }
      });
    }
  }
  res.send();
};

/**
 *  Show profile
 */
exports.show = function(req, res) {
  var user = req.profile;

  res.render('users/show', {
    title: user.name,
    user: user
  });
};

/**
 * Send User
 */
exports.me = function(req, res) {
  res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
  User
    .findOne({
      _id: id
    })
    .exec(function(err, user) {
      if (err) return next(err);
      if (!user) return next(new Error('Failed to load User ' + id));
      req.profile = user;
      next();
    });
};


exports.search = (req, res) => {
  // search users with query ==>
  const { user } = req.query;

  const queryObject = {};
  // check if there is a query at all .
  if (!user) {
    return res.status(422).json({
      message: 'No user search query provided.'
    });
  }

  isEmail(user) ? queryObject.email = user : queryObject.name = user;

  User.find(queryObject, (error, users) => {
    if (error) {
      return res.status(500).json({
        message: 'Server error.'
      });
    }

    if (users.length > 0) {
      const userResponse = users.map(({
        name, email, avatar, username
      }) => ({
        name, email, avatar, username
      }));
      return res.json({ users: userResponse });
    }

    return res.status(404).json({ message: `A user with that ${queryObject.email ? 'email' : 'name'} was not found.` });
  });
};
