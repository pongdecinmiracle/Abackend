const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const Order = require('../models/order')
const Address = require('../models/address')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
const secret = require('./lib/secret')
const decodetime = require('isodate-convert').decode
const encodetime = require('isodate-convert').encode
const timestamp = require('time-stamp');
//====================================================

const app = express.Router()

//=================================================================================================================
//  app.use(function(req, res, next) {
//               // check header or url parameters or post parameters for token
//             //   console.log(req.headers['authorization'])  
//                token = req.body.token || req.query.token || req.headers['authorization'];
//               if (token) {
//                   // console.log(token)  
//                     jwt.verify(token, secret , function(err, decoded) { 
//                       if (err) {
//                         return res.json({ success: false, message: 'Failed to authenticate token.' });    
//                       } else {
//                         req.decoded = decoded;    
//                         next();
//                         //console.log('Token still alive ')
                        
//                       }
//                     });

//                   } else {

//                     // if there is no token
//                     // return an error
//                     return res.status(403).send({ 
//                         success: false, 
//                         message: 'No token provided.' 
//                     });

//               }
//         });
//=================================================================================================================
// //check information  
// app.get('/:Email',function(req,res){
//             var decode = jwt.decode(req.headers['authorization'] );
//             var data = req.body
            
//                     //  Order.find ( {Email: decode.email,Status:"Booking",Status_logistic:"Prepare"} , (err, docs) => {
//                       Order.find ( {Email: req.params.Email,Status:"Booking",Status_logistic:"Prepare"} , (err, docs) => {
//                         if(err){
                       
//                         }else{

//                                   res.json({ 
//                                         success: true, 
//                                         message: 'Found Data.',
//                                         Data: docs
//                                     });         
//                         }
                        
//                     })//findOne     
       
// })
  

//=================================================================================================================
//API : Receive Data Page 
app.post('/add',function(req,res){
            var decode = jwt.decode(req.headers['authorization'] );
            var data = req.body.userinfo
            // console.log(data)
            // console.log(decode)
            // var fullname = (data.userinfo.name).split(" ")
            var name = (data.receivename).split(" ")
            // console.log(name)
                 var Addressdata = new Address({
                     Email: decode.email,
                     Firstname_r : name[0],
                     Lastname_r : name[1],
                     Address_r : data.receiveaddress,
                     Email_r : data.email,
                     Tel_r: data.tel
                 })
                // console.log(Addressdata)
                Addressdata.save(function (err, docs) {
                          if (err) res.json({ 
                                      success: false, 
                                      message: 'Insert Failed.' 
                                });
                          else res.json({ 
                                      success: true, 
                                      message: 'Insert Success.',
                                      data : docs
                            
                                });
                      });
                
                //  }//for     
       
})
// view data
app.post('/addr',function(req,res){
            var decode = jwt.decode(req.headers['authorization'] );
            // var data = req.body
            // console.log(decode.email)
            Address.find({"Email":decode.email}, (err, docs) => {
                    res.json(docs)          
            })        
})
// get data
app.get('/addr/:email',function(req,res){
            // var decode = jwt.decode(req.headers['authorization'] );
            // var data = req.body
            // console.log(decode.email)
            Address.find({"Email":req.params.email}, (err, docs) => {
                    res.json(docs)
                
            })
            
})  
// delete data
app.put('/useraddr',function(req,res){
            var decode = jwt.decode(req.headers['authorization'] );
            var data = req.body
            var orderid = data.OrderId
            Address.remove({"Email":decode.email,Firstname_r:data.userinfo,}, (err, docs) => {
                    res.json({
                        Status : "success"
                    })
                
            })
            
})
//=================================================================================================================
                                 


module.exports = app
