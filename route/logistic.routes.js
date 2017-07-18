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
         
      //@route middleware to verify a token
        app.use(function(req, res, next) {

            // @check header or url parameters or post parameters for token
              token = req.body.token || req.query.token || req.headers['authorization'];
              if (token) {
                    jwt.verify(token, secret , function(err, decoded) { 
                      if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token timeout.' });    
                      } else {
                        req.decoded = decoded;    
                        next();
                      }
                    });

                  } else {

                    // @if there is no token
                    // @return an error
                    return res.status(403).send({ 
                        success: false, 
                        message: 'No token provided.' 
                        
                    });

              }
        });

     

//=================================================================================================================
// route to return all users (GET http://localhost:3002/order)

    app.put('/:OrderId',function(req,res){
       var Data = req.body
       var decode = jwt.decode(req.headers['authorization']||req.body.token );
       var mail = decode.email
       var DataAdd = {
                           Logistic: Data.logistic, //front end must send a Logistic back to back end
                           Price: Data.price //front end must send back price value
                        }
// { type of logistic }
//thailand-post
//Kerry thai 
//Sendit
//FedEx 
//DHL 

            Order.findOneAndUpdate({"_id" : req.params.OrderId,Email:mail} , DataAdd ,function(err,data){
                    if(err){
                        res.json({
                                    success: false, 
                                    message: 'Insert Failed.' 
                                });
                    }else{
                        res.json({ 
                                    success: true, 
                                    message: 'Insert Success.',
                                    OrderId: data._id
                                });

                    }
            })
    })
    
// //=================================================================================================================
 module.exports = app  


 