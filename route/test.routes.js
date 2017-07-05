const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = 'this is the secret secret secret 12356';
//====================================================
const app = express.Router()

//=================================================================================================================
        // route to authenticate a user (POST http://localhost:8080/api/authenticate)

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
//=================================================================================================================
        // route middleware to verify a token
        app.use(function(req, res, next) {

              // check header or url parameters or post parameters for token
              var token = req.body.token || req.query.token || req.headers['x-access-token'];
              if (token) {
                  console.log(token)  
                    jwt.verify(token, secret , function(err, decoded) { 
                      if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token.' });    
                      } else {
                        req.decoded = decoded;    
                        next();
                        //console.log('Token still alive ')
                        
                      }
                    });

                  } else {

                    // if there is no token
                    // return an error
                    return res.status(403).send({ 
                        success: false, 
                        message: 'No token provided.' 
                    });

              }
        });

//=================================================================================================================
// route to show a random message (GET http://localhost:8080/api/)

    
//=================================================================================================================
// route to return all users (GET http://localhost:8080/api/users)
        app.get("/users",function(req,res){
        Auth.find({}, (err, docs) => {
                 res.send(docs)
               })
             })

//=================================================================================================================
   


module.exports = app
