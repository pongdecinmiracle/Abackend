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
            //   console.log(req.headers['authorization'])  
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
            var data = req.body
            if(!data){
                res.json({ 
                        success: false, 
                        message: 'Not Found Data.' 
                    });
            }else if(data===" "){
                   res.json({ 
                        success: false, 
                        message: 'Not Found Data.' 
                    });
            }else{
                //=========================================================
                var receiver = data.recieveaddress
                var senderaddress = data.senderaddress
                var sender_name = data.sendername.split(" ");
                // console.log(sender_name)
                var receive_name = data.receivename.split(" ");
                // console.log(receive_name)
                var weight = data.weight;

            
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

                var mail = decode.email

 

                        var DataAdd = new Order({
                        //    UserID : .find().Count()+1sequence_value[],
                           Email : mail,
                           Address_r: receiver,
                           Firstname_r : receive_name[0],
                           Lastname_r : receive_name[1],
                           Address_s : senderaddress,
                           Firstname_s : sender_name[0],
                           Lastname_s : sender_name[1],
                           Box_length : Box.length,
                           Box_weight : Box.weight,
                           Box_height : Box.height,
                           Weight : weight
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
                                    message: 'Insert Success.',
                                    OrderId: DataAdd._id
                                });
                        })
                        
            }
            
       
            

                  
})
//=================================================================================================================

        app.put('/edit/:OrderId',function(req,res){
            var decode = jwt.decode(req.headers['authorization']||req.body.token );
            // console.log(decode)
            // @ get from Front --> Data
            var data = req.body

            if(!data){
                res.json({ 
                        success: false, 
                        message: 'Not Found Data.' 
                    });
            }else if(data===" "){
                   res.json({ 
                        success: false, 
                        message: 'Not Found Data.' 
                    });
            }else{
                //=========================================================
                var receiver = data.recieveaddress
                var senderaddress = data.senderaddress
                var sender_name = data.sendername.split(" ");
                // console.log(sender_name)
                var receive_name = data.receivename.split(" ");
                // console.log(receive_name)
                var weight = data.weight;

            
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

                var mail = decode.email

 

                        // var DataAdd = new Order({
                        // //    UserID : .find().Count()+1sequence_value[],
                        //    Email : mail,
                        //    Address_r: receiver,
                        //    Firstname_r : receive_name[0],
                        //    Lastname_r : receive_name[1],
                        //    Address_s : senderaddress,
                        //    Firstname_s : sender_name[0],
                        //    Lastname_s : sender_name[1],
                        //    Box_length : Box.length,
                        //    Box_weight : Box.weight,
                        //    Box_height : Box.height,
                        //    Weight : weight
                        // })
                        // DataAdd.save((err) => {
                        //     if (err) 
                        //         res.json({ 
                        //             success: false, 
                        //             message: 'Insert Failed.' 
                        //         });
                        //     else 
                        //         res.json({ 
                        //             success: true, 
                        //             message: 'Insert Success.',
                        //             OrderId: DataAdd._id
                        //         });
                        // })
                        
            }
                    var DataAdd = {
                        //    Email : mail,
                           Address_r: receiver,
                           Firstname_r : receive_name[0],
                           Lastname_r : receive_name[1],
                           Address_s : senderaddress,
                           Firstname_s : sender_name[0],
                           Lastname_s : sender_name[1],
                           Box_length : Box.length,
                           Box_weight : Box.weight,
                           Box_height : Box.height,
                           Weight : weight
                        }
// _id : req.params.OrderId,
                        // console.log(DataAdd)
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
                    // console.log(data)
            })
})

//=================================================================================================================
 
module.exports = app  
