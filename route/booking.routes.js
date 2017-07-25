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
// route to return all users (POST http://localhost:3002/logistic)
        app.get('/:email',function(req,res){
            // var decode = jwt.decode(req.headers['authorization']||req.body.token );
            // var data = req.body
             
            // if(!data){
            //     res.json({ 
            //             success: false, 
            //             message: 'Not Found Data.' 
            //         });
            // }else if(data===" "){
            //        res.json({ 
            //             success: false, 
            //             message: 'Not Found Data.' 
            //         });
            // }else{
                // Order.find({Email:decode.email,Status:"Booking"},(err,docs)=>{
                Order.find({Email:req.params.email,Status:"Booking"},(err,docs)=>{
                    // Order.find({Email:"c@gmail.com",Status:"Booking"},(err,docs)=>{   
                    res.json({ 
                        success: true, 
                        message: 'Found Data.',
                        Data: docs
                    });
                  //ติดไว้ แปป ลองทำ loop  
                })
            // }     
})
//=================================================================================================================
// route to return all users (POST http://localhost:3002/logistic/dropoff)
        app.put('/prepare',function(req){
            var decode = jwt.decode(req.headers['authorization']||req.body.token );
            var data = req.body
            var collect = (data.userinfo.OrderId).split(" ")
            var l = collect.length
            // console.log(data)
            Dropdata = {
                     Status_logistic:"Prepare"
                 }
            for(var i=1;i<l;i++){
                // Order.findOneAndUpdate({"_id" : collect[i] , Email: decode.email} , Dropdata ,function(err,docs){
                    Order.findOneAndUpdate({"_id" : collect[i] , Email: "pong@gmail.com"} , Dropdata ,function(err,docs){
                        if(err){
                       
                        }else{
                            
                                // console.log(docs)
                        }
                        
                    })//findOne
            }
            console.log("pass")   

            
           
            
       
})
//=================================================================================================================
// route to return all users (POST http://localhost:3002/logistic/dropoff)
        app.put('/dropoff',function(req){
            var decode = jwt.decode(req.headers['authorization']||req.body.token );
            var data = req.body.userinfo
            // var header = req.headers
            console.log(data)
            // console.log(header)
            // @body.location
            // @body.OrderId
                 Dropdata = {
                     Drop_location : data.location,
                 }
                    console.log(Dropdata)
                 
                        // Order.findOneAndUpdate({"_id" : data.OrderId[i] , Email: decode.email} , Dropdata ,function(err,docs){
                    Order.update({ Email: decode.email,Status_logistic:"Prepare",Status:"Booking"} , {$set : Dropdata},{multi : true} ,function(err,docs){
                        if(err){
                       
                        }else{
                            
                                // console.log(docs)
                        }
                        
                    })//findOne
                

            // var data = req.body
            
                 

            
           
            
       
})
//=================================================================================================================
// // route to return all users (POST http://localhost:3002/booking/:OrderId)

            app.put('/delete',function(req){
                    var data = req.body
                    // console.log(data)
                    if(data.userinfo.OrderId===" "){
                    //     res.json({
                    //         status: false,message: "no data"
                    //   })
                    }else{
                    var collect = (data.userinfo.OrderId).split(" ")
                    var l = collect.length
                    // console.log(collect)
                    // console.log(l)
                    for(var i=1;i<l;i++){
                    // console.log(collect[i])
                    Order.remove({_id : collect[i]},
                            function(err,data){
                                // if(err){
                                //     console.log(err)
                                // }else{
                                //     //    console.log(data)
                                //     //    res.json({
                                //     //        data : data,
                                //     //        status: true
                                //     //    })
                                       
                            
                            })
                            
                        // })
                        
                    }
                //     console.log("pass")
                }
            })
                
//=================================================================================================================
  
module.exports = app  
