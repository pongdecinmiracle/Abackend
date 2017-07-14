const express = require('express')
const mongoose = require('mongoose')
const apiDB = require('../models/apitrack')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
const secret = 'this is the secret secret secret 12356';

const app = express.Router()
var data
var detail
var token

//@ ET089578821TH

//=================================================================================================================
        // //@route middleware to verify a token
        // app.use(function(req, res, next) {

        //     // @check header or url parameters or post parameters for token
        //       console.log(req.headers['authorization'])
        //       token = req.body.token || req.query.token || req.headers['authorization'];
        //       if (token) {
        //             jwt.verify(token, secret , function(err, decoded) { 
        //               if (err) {
        //                 return res.json({ success: false, message: 'Failed to authenticate token timeout.' });    
        //               } else {
        //                 req.decoded = decoded;    
        //                 next();
        //                 console.log("pass")
        //               }
        //             });

        //           } else {

        //             // @if there is no token
        //             // @return an error
        //             return res.status(403).send({ 
        //                 success: false, 
        //                 message: 'No token provided.' 
                        
        //             });
        //             console.log("not pass")

        //       }
        // });

     

//=====================================================================
//  @   check track number from DB

        app.post('/',function(req,res){
                
                apiDB.find({"trackno":req.body.trackno}, (err, docs) => {
                  if(err){
                    res.send(err)
          
                  }else{
                        if(docs==''){
                          apiDB.find({"trackno":"Not Found"}, (err, docsNotFound) => {
                          console.log("Not Found")
                          res.send(docsNotFound) //@if not found
                        })
                        }else{
                          console.log("OK")
                          res.send(docs) //@if true
                      }
                }

            })

        })


//=====================================================================






module.exports = app
