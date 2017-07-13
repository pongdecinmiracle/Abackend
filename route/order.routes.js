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
        app.use(function(req, res, next) {
              // check header or url parameters or post parameters for token
              console.log(req.headers['authorization'])  
               var token = req.body.token || req.query.token || req.headers['authorization'];
              if (token) {
                  // console.log(token)  
                    jwt.verify(token, secret , function(err, decoded) { 
                      if (err) {
                        return res.json({ success: false, message: 'Failed to authenticate token.' });    
                      } else {
                        req.decoded = decoded;    
                        next();
                        //console.log('Token still alive ')
                        
                      }
                    });

                  } else {

                    // if there is no token
                    // return an error
                    return res.status(403).send({ 
                        success: false, 
                        message: 'No token provided.' 
                    });

              }
        });

        //=================================================================================================================

     

//=================================================================================================================
// route to return all users (GET http://localhost:3002/order)
app.post('/',function(req,res){
    var decode = jwt.decode(req.headers['authorization']||req.body.token );
            // console.log(decode)
            Auth.find ( { $or : [{"Email":decode.email}] } , (err, docs) => {
                 res.send(docs)
                 console.log(docs)
               })
            // @ get from Front --> Data
            var data = req.body
            if(!data){
                   
            }else{
                var member_no // @ member no refference into database
                //=========================================================
                var reciever = data.recievaddress
                var senderaddress = data.senderaddress
                var sender_name = data.sendername
                var sender_name = sender_name.split(" ");
                var recieve_name = data.recievname
                var recieve_name = recieve_name.split(" ");

            
                if(data.boxsize==="BOX 1 (10X10X10 cm)"){
                    var Box = {
                        weight : 10,
                        height : 10,
                        length : 10
                    }
                }else  if(data.boxsize==="BOX 2 (20X20X20 cm)"){
                    var Box = {
                        weight : 20,
                        height : 20,
                        long   : 20
                    }
                }else  if(data.boxsize==="BOX 3 (30X30X30 cm)"){
                    var Box = {
                        weight : 30,
                        height : 30,
                        length : 30
                    }
                }else  if(data.boxsize==="BOX 4 (40X40X40 cm)"){
                    var Box = {
                        weight : 40,
                        height : 40,
                        length : 40
                    }
                }else {
                    var Box = {
                        weight : 50,
                        height : 50,
                        length : 50
                    }
                }
                 
                        var DataAdd = new Order({
                           Address_r: reciever,
                           Firstname_r : recieve_name[0],
                           Lastname_r : recieve_name[1],
                           Address_s : senderaddress,
                           Firstname_s : sender_name[0],
                           Lastname_s : sender_name[1],
                           Box_length : Box.length,
                           Box_weight : Box.weight,
                           Box_height : Box.height
                        })
                        DataAdd.save((err) => {
                            if (err) 
                                res.json({ 
                                    success: false, 
                                    message: 'Insert Failed.' 
                                });
                            else 
                                res.json({ 
                                    success: true, 
                                    message: 'Insert Success.' 
                                });
                        })
                        
            }
       
            

                  
})

// //=================================================================================================================
   
// // boxsize
// // :
// // "BOX 1 (10X10X10 cm)"
// // recievaddress
// // :
// // "bb"
// // recievname
// // :
// // "b"
// // senderaddress
// // :
// // "a"
// // sendername
// // :
// // "a"
// // weight
// // :
// // "100-250 gram"

module.exports = app

         

                // var weight = data.weight
                // if(weight>=100 && weight<=250){
                //     var w1 = weight
                // }else  if(weight>=251 && weight<=500){
                //     var w2 = weight
                // }else  if(weight>=501 && weight<=751){
                //     var w3 = weight
                // }else  if(weight>=100 && weight<=250){
                //     var w4 = weight
                // }else{
                //     var w4 = weight
                // }  

