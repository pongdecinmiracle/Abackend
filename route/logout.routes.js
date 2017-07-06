const express = require('express')
const session = require('express-session');
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
const Auth = require('../models/AuthDB')
const app = express.Router()
const secret = 'this is the secret secret secret 12356';

app.use(session({secret}));

var sess;

  app.get('/',function(req,res){
      res.send('Home')
      console.log(sess)
      console.log(sess.token)
});

  app.post('/in',function(req,res){
      sess = req.session;
      sess.email=req.body.email;
      
      var profile = {
          first_name: "pong",
          last_name: "dec",
          email: "pong@gmail.com"
              };
      var token = jwt.sign(profile, secret,{
          expiresIn: '1440m' // exp in 24 hr
              });
      sess.token=token;
    //   console.log(req.session)
      res.end('done');
      console.log(sess.token)
});

  app.get('/out', (req, res) => {
    req.session.destroy(() => {
      req.logOut();
      res.status(200);
      res.redirect('/');
    });
});


module.exports = app
