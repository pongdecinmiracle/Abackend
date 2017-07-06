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

var Email
var Pass

//app.post('/users/authenticate',function(req,res){
//    Email= req.body.Email
//    Pass= req.body.Pass
//  console.log(req.body.Email)
//  console.log(req.body.Pass) 
//})
// app.post('/users/authenticate', function(req, res) {
app.post('/', function(req, res) {
  console.log(req.body.Email)
  console.log(req.body.Pass)
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
                    expiresIn: '1m' // exp in 24 hr
                    });
//            app.get('/',function(req,res){
                   res.json({
                      success: true,
                      message: 'Enjoy your token!',
                      token: token
                    });
//                })
                }
            }
        })
    // console.log('pass')
    })
//                app.route('/users/authenticate')
//                    .get((req, res) => {
//                var profile = {
//                    first_name: user.Firstname,
//                    last_name: user.Lastname,
//                    email: user.Email
//                        };
//                var token = jwt.sign(profile, secret,{
//                    expiresIn: '1440m' // exp in 24 hr
//                    });
//                   res.json({
//                      success: true,
//                      message: 'Enjoy your token!',
//                      token: token
//                    });
//                })

module.exports = app
