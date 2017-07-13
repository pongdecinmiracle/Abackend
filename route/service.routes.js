const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const Order = require('../models/order')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================

const app = express.Router()

//=================================================================================================================
//  app.use(function(req, res, next) {
//               // check header or url parameters or post parameters for token
//               console.log(req.headers['authorization'])  
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
  app.post('/',function(req,res){
       
      var newTrack = Order(req.body)
    //   console.log(newTrack);
      newTrack.save((err) => {
        if (err) res.send('insert error')
        else res.send('insert success')
      })
    })
  

//=================================================================================================================
 app.put('/:Firstname',function(req,res){
       Order.findOneAndUpdate({Firstname_s : req.params.Firstname} , req.body,
           function(err,data){
               if(err){
                   console.log(err)
               }else{
                //    console.log(data)
                //    res,end(data)

               }
           })
    })
  

//=================================================================================================================
app.delete('/:Firstname_s',function(req,res){
       Order.findOneAndRemove(req.params.Firstname_s,
           function(err,data){
               if(err){
                   console.log(err)
               }else{
                //    console.log(data)
                //    res,end(data)

               }
           })
    })
  

//=================================================================================================================




module.exports = app
