const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = require('./lib/secret')
//====================================================
const app = express.Router()

var Email
var Pass

app.post('/', function(req, res,next) {
            
              // console.log(req.body.Email)
              // console.log(req.body.Pass)
              Auth.findOne({ 
                Email: req.body.Email
              }, function(err, user) {
                  
                if (err) throw err;
                  
                if (!user) {
                  res.json({ success: false, message: 'Authentication failed. Email not found.' });
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
                                expiresIn: '50m' // exp in 5 min
                                });

                              res.json({
                                  success: true,
                                  message: 'Enjoy your token!',
                                  token: token
                                });
                                

                            }
                            // console.log("pass")
                        }
                        
                    })
                      
    })


module.exports = app
