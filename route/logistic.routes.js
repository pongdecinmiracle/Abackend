const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const Order = require('../models/order')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = require('./lib/secret')
//====================================================
const app = express.Router()

//=================================================================================================================
         
      // //@route middleware to verify a token
      //   app.use(function(req, res, next) {

      //       // @check header or url parameters or post parameters for token
      //         token = req.body.token || req.query.token || req.headers['authorization'];
      //         if (token) {
      //               jwt.verify(token, secret , function(err, decoded) { 
      //                 if (err) {
      //                   return res.json({ success: false, message: 'Failed to authenticate token timeout.' });    
      //                 } else {
      //                   req.decoded = decoded;    
      //                   next();
      //                 }
      //               });

      //             } else {

      //               // @if there is no token
      //               // @return an error
      //               return res.status(403).send({ 
      //                   success: false, 
      //                   message: 'No token provided.' 
                        
      //               });

      //         }
      //   });

     
     

//=================================================================================================================
// route to return all users (GET http://localhost:3002/order)

    app.put('/:OrderId',function(req,res){
    //    console.log("===================================")
        var Data = req.body
    //    console.log(Data)
          var logis = Data.userinfo.logistic.logistic
          var value = Data.userinfo.priceLogistic
          // console.log(logis)
          var price
        if(logis==="Thaipost"){
        //   console.log(price.Thaipost)
          price = value.Thaipost
          }else if(logis==="ThaipostEMS"){
        //   console.log(price.ThaipostEMS)
          price = value.ThaipostEMS
          }else if(logis==="dhl"){
        //   console.log(price.dhl)
          price = value.dhl
          }else if(logis==="Kerry"){
        //   console.log(price.Kerry)
          price = value.Kerry
          }else if(logis==="Sendit"){
        //   console.log(price.Sendit)
          price = value.Sendit
          }else if(logis==="FedEx"){
          // console.log(price.FedEx)
          price = value.FedEx
          }else{
            console.log("miss")

          }
        // console.log(price)
       var decode = jwt.decode(req.headers['authorization']||req.body.token );
       var mail = decode.email
       var DataAdd = {
                           Logistic: logis, //front end must send a Logistic back to back end
                           Price: price //front end must send back price value
                        }
// { type of logistic }
//thailand-post
//Kerry thai 
//Sendit
//FedEx 
//DHL 

            // Order.findOneAndUpdate({"_id" : req.params.OrderId,Email:mail} , DataAdd ,function(err,data){
              Order.findOneAndUpdate({"_id" : req.params.OrderId} , DataAdd ,function(err,data){
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
    
//=================================================================================================================




module.exports = app  


 