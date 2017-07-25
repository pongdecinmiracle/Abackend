const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = require('./lib/secret')
//====================================================
const app = express.Router()

//=================================================================================================================
        //  // @route middleware to verify a token
        // app.use(function(req, res, next) {

        //     // @check header or url parameters or post parameters for token
        //       token = req.body.token || req.query.token || req.headers['authorization'];
        //       if (token) {
        //             jwt.verify(token, secret , function(err, decoded) { 
        //               if (err) {
        //                 return res.json({ success: false, message: 'Failed to authenticate token timeout.' });    
        //               } else {
        //                 req.decoded = decoded;    
        //                 next();
        //               }
        //             });

        //           } else {

        //             // @if there is no token
        //             // @return an error
        //             return res.status(403).send({ 
        //                 success: false, 
        //                 message: 'No token provided.' 
                        
        //             });

        //       }
        // });
//=================================================================================================================

    
//=================================================================================================================
// route to return all users (GET http://localhost:3002/users)
        app.post('/',function(req,res){
            var decode = jwt.decode(req.headers['authorization']||req.body.token);
            Auth.find({"Email":decode.email}, (err, docs) => { //real
        //        Auth.find({Email:}, (err, docs) => {
                    res.json({
                                  success: true,
                                  message: 'Enjoy your token!',
                                  firstname: docs[0].Firstname,
                                  lastname: docs[0].Lastname,
                                  email: docs[0].Email,
                                  tel: docs[0].tel,
                                //   firstname: docs.Firstname,
                                //   lastname: docs.Lastname,
                                //   email: docs.Email,
                                //   tel: docs.tel
                                //   token: token
                                });
                                // console.log("pass")
                                // console.log(docs)
                  })
                  // console.log(res)
             })

//=================================================================================================================
   


module.exports = app
