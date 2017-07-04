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

let data
app.route('/')
  .post((req, res) => {
    //test
//       Auth.find({$and:[{"Email":"pong@gmail.com"},{"Pass":"1234"}]}, (err, docs) => {
    //real
       Auth.find({$and:[{"Email":req.body.Email},{"Pass":req.body.Pass}]}, (err, docs) => {
    var profile = {
        first_name: docs[0].Firstname,
        last_name: docs[0].Lastname,
        email: docs[0].Email
            };
    var token = jwt.sign(profile, secret,{ expiresIn: '1s' });
      res.json({ token: token });
    })
    
})

module.exports = app
