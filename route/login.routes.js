const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = 'this is the secret secret secret 12356';
//====================================================
const app = express.Router()

app.post('/users/authenticate', function(req, res) {

  
  Auth.findOne({
    Email: req.body.Email
  }, function(err, user) {
      console.log(user)
    if (err) throw err;

    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

      
      if (user.Pass != req.body.Pass) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        }else{
                var profile = {
                    first_name: user.Firstname,
                    last_name: user.Lastname,
                    email: user.Email
                        };
                var token = jwt.sign(profile, secret,{
                    expiresIn: '1440m' // exp in 24 hr
                    });
                   res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                    });
                }
            }
        })
    })

module.exports = app
