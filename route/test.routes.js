const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session');
const bcrypt = require('bcrypt');
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const Order = require('../models/order')
const passport = require('passport')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
//====================================================
const secret = require('./lib/secret')
//====================================================
const app = express()
var token="safobog"
var sess

//=================================================================================================================
        // app.get('/',function(req,res){

        //     res.send(sess)
        //     console.log("pass")
        // })

//=================================================================================================================
        // // route to authenticate a user (POST http://localhost:3002/test/login)

        // app.post('/login', function(req, res) {
        //           Auth.findOne({
        //             Email: req.body.Email
        //           }, function(err, user) {
        //               console.log(user)
        //             if (err) throw err;

        //             if (!user) {
        //               res.json({ success: false, message: 'Authentication failed. User not found.' });
        //             } else if (user) {


        //               if (user.Pass != req.body.Pass) {
        //                 res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        //               }else{
                               

        //                         var profile = {
        //                             first_name: user.Firstname,
        //                             last_name: user.Lastname,
        //                             email: user.Email
        //                                 };
        //                             token = jwt.sign(profile, secret,{
        //                             expiresIn: '10m' // exp in 24 hr
        //                             });
        //                            res.json({
        //                               success: true,
        //                               message: 'Enjoy your token!',
        //                               token: token
                                      
        //                             });

                           
        //                         }
        //                     }
        //                 })
        //             })
//=================================================================================================================
      //   // route middleware to verify a token
      //   app.use(function(req, res, next) {
      //         // check header or url parameters or post parameters for token
      //         console.log(req.headers['authorization'])  
      //          token = req.body.token || req.query.token || req.headers['authorization'];
      //         if (token) {
      //             // console.log(token)  
      //               jwt.verify(token, secret , function(err, decoded) { 
      //                 if (err) {
      //                   return res.json({ success: false, message: 'Failed to authenticate token.' });    
      //                 } else {
      //                   req.decoded = decoded;    
      //                   next();
      //                   //console.log('Token still alive ')
                        
      //                 }
      //               });

      //             } else {

      //               // if there is no token
      //               // return an error
      //               return res.status(403).send({ 
      //                   success: false, 
      //                   message: 'No token provided.' 
      //               });

      //         }
      //   });

// //=================================================================================================================


// //=================================================================================================================
// route to return all users (GET http://localhost:3002/test/)
    //     app.post('/',function(req,res){
    // var decode = jwt.decode(req.headers['authorization']||req.body.token );
    //         console.log(decode)
    //         Auth.find ( { $or : [{"Email":decode.email}] } , (err, docs) => {
    //             //  res.send(docs)
    //              console.log(docs)
    //            })
    //     })
        

//=================================================================================================================
      //   app.get('/out', (req, res) => {
      //     // sess=req.session.destroy(() => {
      //       req.logOut();
      //       res.status(200);
      //       res.redirect('/users');
      //     // });
      // });

//=================================================================================================================
      //   app.get('/hash', (req, res) => {
      //     Auth.findOne({ 
      //           var Email= "pong@gmail.com"
      //         }, function(err, user) {
      //           var hash = bcrypt.hashSync(Email);
      //           console.log(hash)
      //         })
      // });

//=================================================================================================================
 
        // app.put('/',function(){
        //   for(var i=53;i<56;i++){
        //     console.log(i)
          
        //     Order.findOneAndUpdate({"_id" :i } , {"Status":"Waiting"} ,function(err,data){
             

              
        //             if(err){
        //                 // res.json({
        //                 //             success: false, 
        //                 //             message: 'Insert Failed.' 
        //                 //         });
        //             }else{
        //                 // res.json({ 
        //                 //             success: true, 
        //                 //             message: 'Insert Success.',
        //                 //             OrderId: data._id,
        //                 //             datas: data
        //                 //         });

        //             }
        //          console.log(data) 
                   
        //         })//findOne
                
        //     }
          
        // })
       
  //  Order.find({Email:"pong@gmail.com",Status:"Payment"},function(req,res){
  //               console.log(res.length)
  //             })
  //=================================================================================================================
  // app.post('/',function(req,res){
       
  //     var newTrack = Order(req.body)
  //   //   console.log(newTrack);
  //     newTrack.save((err) => {
  //       if (err) res.send('insert error')
  //       else res.send('insert success')
  //     })
  //   })
  

//=================================================================================================================
//  app.put('/:Firstname',function(req,res){
//        Order.findOneAndUpdate({Firstname_s : req.params.Firstname} , req.body,
//            function(err,data){
//                if(err){
//                    console.log(err)
//                }else{
//                 //    console.log(data)
//                 //    res,end(data)

//                }
//            })
//     })
  

//=================================================================================================================
// app.delete('/:Firstname_s',function(req,res){
//        Order.findOneAndRemove(req.params.Firstname_s,
//            function(err,data){
//                if(err){
//                    console.log(err)
//                }else{
//                 //    console.log(data)
//                 //    res,end(data)

//                }
//            })
//     })
  

//=================================================================================================================


module.exports = app


