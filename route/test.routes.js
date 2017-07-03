const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
const secret = 'this is the secret secret secret 12356';
const app = express.Router()

var data
app.route('/')
  .get((req, res) => {
       Auth.find({}, (err, docs) => {
         res.send(docs)
         console.log(docs)
       
    data=docs
    
         var profile = {
        first_name: data.Fristname,
        last_name: data.Lastname,
        email: data.Email,
        id: 123
            };
        console.log(profile)
      // We are sending the profile inside the token
    var token = jwt.sign(profile, secret,{ expiresIn: '1h' });

      res.json({ token: token });

    
    
    })
    
})
    
//    var name= Auth.find({})
////    console.log(name)
//    var profile = {
//    first_name: name.Fristname,
//    last_name: name.Lastname,
//    email: name.Email,
//    id: 123
//  };
//    console.log(profile)
//  // We are sending the profile inside the token
//var token = jwt.sign(profile, secret,{ expiresIn: '1h' });
//
//  res.json({ token: token });

//    
//  
//
//    
//    
//})

module.exports = app
