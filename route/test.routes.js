const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session');
const bcrypt = require('bcrypt');
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = 'this is the secret secret secret 12356';
//====================================================
const app = express()
var token="safobog"
var sess

//=================================================================================================================
        // app.get('/',function(req,res){

        //     res.send(sess)
        //     console.log("pass")
        // })

//=================================================================================================================
        // route to authenticate a user (POST http://localhost:3002/test/login)

        app.post('/login', function(req, res) {
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
                                    token = jwt.sign(profile, secret,{
                                    expiresIn: '10m' // exp in 24 hr
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
      //   // route middleware to verify a token
      //   app.use(function(req, res, next) {
      //         // check header or url parameters or post parameters for token
      //         console.log(req.headers['authorization'])  
      //          token = req.body.token || req.query.token || req.headers['authorization'];
      //         if (token) {
      //             // console.log(token)  
      //               jwt.verify(token, secret , function(err, decoded) { 
      //                 if (err) {
      //                   return res.json({ success: false, message: 'Failed to authenticate token.' });    
      //                 } else {
      //                   req.decoded = decoded;    
      //                   next();
      //                   //console.log('Token still alive ')
                        
      //                 }
      //               });

      //             } else {

      //               // if there is no token
      //               // return an error
      //               return res.status(403).send({ 
      //                   success: false, 
      //                   message: 'No token provided.' 
      //               });

      //         }
      //   });

// //=================================================================================================================


// //=================================================================================================================
// route to return all users (GET http://localhost:3002/test/)
        app.post('/',function(req,res){
    var decode = jwt.decode(req.headers['authorization']||req.body.token );
            console.log(decode)
            Auth.find ( { $or : [{"Email":decode.email}] } , (err, docs) => {
                //  res.send(docs)
                 console.log(docs)
               })
        })
        

//=================================================================================================================
      //   app.get('/out', (req, res) => {
      //     // sess=req.session.destroy(() => {
      //       req.logOut();
      //       res.status(200);
      //       res.redirect('/users');
      //     // });
      // });

//=================================================================================================================
      //   app.get('/hash', (req, res) => {
      //     Auth.findOne({ 
      //           var Email= "pong@gmail.com"
      //         }, function(err, user) {
      //           var hash = bcrypt.hashSync(Email);
      //           console.log(hash)
      //         })
      // });

//=================================================================================================================
 
       
  

module.exports = app


