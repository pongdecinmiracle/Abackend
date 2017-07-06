const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
const secret = 'this is the secret secret secret 12356';
const app = express()
app.get('/', function (req, res) {
     var profile = {
    first_name: 'John',
    last_name: 'Doe',
    email: 'john@doe.com',
    id: 123
  };

  // We are sending the profile inside the token
var token = jwt.sign(profile, secret,{ expiresIn: '1h' });

  res.json({ token: token });

});


 module.exports = app
