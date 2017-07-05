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
        // route middleware to verify a token
        app.use(function(req, res, next) {

              // check header or url parameters or post parameters for token
              var token = req.body.token || req.query.token || req.headers['x-access-token'];
              if (token) {
                  //console.log(token)  
                    jwt.verify(token, secret , function(err, decoded) { 
                      if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token timeout.' });    
                      } else {
                        req.decoded = decoded;    
                        next();
                        //console.log('decode')
                        //console.log(decode)
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
        app.get("/",function(req,res){
            var decode = jwt.decode(req.headers['x-access-token']);
            console.log(decode.email)
        Auth.find({"Email":decode.email}, (err, docs) => {
                 res.send(docs)
               })
             })

//=================================================================================================================
   


module.exports = app
