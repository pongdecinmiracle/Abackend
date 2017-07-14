const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const Order = require('../models/order')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = 'this is the secret secret secret 12356';
//====================================================
const app = express.Router()

//=================================================================================================================
         // route middleware to verify a token
        // app.use(function(req, res, next) {
        //       // check header or url parameters or post parameters for token
        //       console.log(req.headers['authorization'])  
        //        var token = req.body.token || req.query.token || req.headers['authorization'];
        //       if (token) {
        //           // console.log(token)  
        //             jwt.verify(token, secret , function(err, decoded) { 
        //               if (err) {
        //                 return res.json({ success: false, message: 'Failed to authenticate token.' });    
        //               } else {
        //                 req.decoded = decoded;    
        //                 next();
        //                 //console.log('Token still alive ')
                        
        //               }
        //             });

        //           } else {

        //             // if there is no token
        //             // return an error
        //             return res.status(403).send({ 
        //                 success: false, 
        //                 message: 'No token provided.' 
        //             });

        //       }
        // });

        //=================================================================================================================

     

//=================================================================================================================
// route to return all users (GET http://localhost:3002/order)

    app.put('/:OrderId',function(req,res){
       Order.findOneAndUpdate({_id : req.params.OrderId} , req.body,
           function(err,data){
               if(err){
                   console.log(err)
               }else{
                //    console.log(data)
                //    res,end(data)

               }
           })
    })
    
// //=================================================================================================================
 module.exports = app  


 