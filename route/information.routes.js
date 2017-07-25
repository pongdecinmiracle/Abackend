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
  app.get('/:Email',function(req,res){
            var decode = jwt.decode(req.headers['authorization'] );
            var data = req.body
            
                //  Dropdata = {
                //      Status:"Waiting"
                //  }
                // console.log(data)
                //  var l = (data.OrderId).length
                //  for(i=0;i<l;i++){
                  //"_id":data.OrderId,
                    //  Order.find ( {Email: decode.email,Status:"Booking",Status_logistic:"Prepare"} , (err, docs) => {
                      Order.find ( {Email: req.params.Email,Status:"Booking",Status_logistic:"Prepare"} , (err, docs) => {
                        // console.log(docs[1].Price)
                        if(err){
                       
                        }else{

                                  res.json({ 
                                        success: true, 
                                        message: 'Found Data.',
                                        Data: docs
                                    });         
                        }
                        
                    })//findOne   
                //  }//for     
       
})
  

//=================================================================================================================
app.post('/add',function(req,res){
            var decode = jwt.decode(req.headers['authorization'] );
            var data = req.body
            console.log(data)
            // console.log(decode)
            // var fullname = (data.userinfo.name).split(" ")
            var name = (data.fullname).split(" ")
            console.log(name)
                 var Addressdata = new Address({
                     Email: decode.email,
                     Firstname_r : name[0],
                     Lastname_r : name[1],
                     Address_r : data.address,
                     Email_r : data.email,
                     Tel_r: data.tel
                 })
                console.log(Addressdata)
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
  

//=================================================================================================================
app.post('/test',function(req,res){
            var decode = jwt.decode(req.headers['authorization'] );
            Address.find({Email: decode.email},function(err,docs) {
              var l = docs.length
              for(var i =0 ; i<l ; i++){
                  console.log(docs[i].reg_time)
                  var ti = docs[i].reg_time
                  console.log(ti)
                  res.json({

                  })
              }
              
              
              // console.log(docs) 
              //  var obj = { date: docs[0].reg_time }2017-07-24T04:13:35.768Z
              // var obj = { date: '2017-07-24T04:13:35.768Z' }
              // var decoded = decodetime(obj)
              // var encoded = encodetime('2017-07-24T04:13:35.768Z')
              // console.log(decoded)
              // console.log(encoded) 
              // var time = timestamp();
              // console.log(time)

            })
       
})
  

//=================================================================================================================
                                 


module.exports = app
