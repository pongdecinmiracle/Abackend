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

     

//=================================================================================================================
// route to return all users (GET http://localhost:3002/order)
// @ value for front : recieveaddress,senderaddress,sendername,receivename,weight,boxsize

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
                var receive_name = data.receivename.split(" ");
                var weight = data.weight;

            
                if(data.boxsize==="BOX 1 (10X10X10 cm)"){
                    var Box = {
                        width : 10,
                        height : 10,
                        length : 10
                    }
                }else  if(data.boxsize==="BOX 2 (20X20X20 cm)"){
                    var Box = {
                        width : 20,
                        height : 20,
                        length   : 20
                    }
                }else  if(data.boxsize==="BOX 3 (30X30X30 cm)"){
                    var Box = {
                        width : 30,
                        height : 30,
                        length : 30
                    }
                }else  if(data.boxsize==="BOX 4 (40X40X40 cm)"){
                    var Box = {
                        width : 40,
                        height : 40,
                        length : 40
                    }
                }else {
                    var Box = {
                        width : 50,
                        height : 50,
                        length : 50
                    }
                }

                var mail = decode.email

 

                        
            //----------------------------------------------------------------------------
            if(data.boxsize==="BOX 1 (10X10X10 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 2 (20X20X20 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 3 (30X30X30 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 4 (40X40X40 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 5 (50X50X50 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }
            // console.log(DataLogistic)
                        var DataAdd = new Order({
                           Email : mail,
                           Address_r: receiver,
                           Firstname_r : receive_name[0],
                           Lastname_r : receive_name[1],
                           Address_s : senderaddress,
                           Firstname_s : sender_name[0],
                           Lastname_s : sender_name[1],
                           Box_length : Box.length,
                           Box_width : Box.width,
                           Box_height : Box.height,
                           Weight : weight,
                           Status: "Waiting"
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
                                    OrderId: DataAdd._id,
                                    PriceLogistic : DataLogistic,
                                    Boxheight: Box.height,
                                    Boxlength: Box.length,
                                    Boxwidth: Box.width
                                });
                        })
                        
            }
            
       
            

                  
})
//=================================================================================================================

// @ value for front : recieveaddress,senderaddress,sendername,receivename,weight,boxsize [body]
// @ value for front : id 
        app.put('/edit/:OrderId',function(req,res){
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
                var receive_name = data.receivename.split(" ");
                var weight = data.weight;

            
                if(data.boxsize==="BOX 1 (10X10X10 cm)"){
                    var Box = {
                        width : 10,
                        height : 10,
                        length : 10
                    }
                }else  if(data.boxsize==="BOX 2 (20X20X20 cm)"){
                    var Box = {
                        width : 20,
                        height : 20,
                        length   : 20
                    }
                }else  if(data.boxsize==="BOX 3 (30X30X30 cm)"){
                    var Box = {
                        width : 30,
                        height : 30,
                        length : 30
                    }
                }else  if(data.boxsize==="BOX 4 (40X40X40 cm)"){
                    var Box = {
                        width : 40,
                        height : 40,
                        length : 40
                    }
                }else if(data.boxsize==="BOX 5 (50X50X50 cm)"){
                    var Box = {
                        width : 50,
                        height : 50,
                        length : 50
                    }
                }else{

                }

                var mail = decode.email
                        
            }
                    var DataAdd = {
                           Address_r: receiver,
                           Firstname_r : receive_name[0],
                           Lastname_r : receive_name[1],
                           Address_s : senderaddress,
                           Firstname_s : sender_name[0],
                           Lastname_s : sender_name[1],
                           Box_length : Box.length,
                           Box_width : Box.width,
                           Box_height : Box.height,
                           Weight : weight,
                           Status: "Waiting"
                        }


            //------------------------------------------------------------------------
            if(data.boxsize==="BOX 1 (10X10X10 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 2 (20X20X20 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 3 (30X30X30 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 4 (40X40X40 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }else if(data.boxsize==="BOX 5 (50X50X50 cm)"){
                if(data.weight==="100-250 gram"){
                    var DataLogistic = {
                        DHLprice:  12,
                        Kerryprice: 11,
                        FedEx: 15,
                        Thaipost: 10,
                        Sendit: 13
                    }
                }else if(data.weight==="251-500 gram"){
                    var DataLogistic = {
                        DHLprice:  22,
                        Kerryprice: 21,
                        FedEx: 25,
                        Thaipost: 20,
                        Sendit: 23
                    }
                }else if(data.weight==="501-750 gram"){
                    var DataLogistic = {
                        DHLprice:  32,
                        Kerryprice: 31,
                        FedEx: 35,
                        Thaipost: 30,
                        Sendit: 33
                    }
                }else if(data.weight==="751-1000 gram"){
                    var DataLogistic = {
                        DHLprice:  42,
                        Kerryprice: 41,
                        FedEx: 45,
                        Thaipost: 40,
                        Sendit: 43
                    }
                }else {
                    console.log("wrong1")
                }
            }
            // console.log(DataLogistic)

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
                                    OrderId: DataAdd._id,
                                    PriceLogistic : DataLogistic,
                                    Boxheight: Box.height,
                                    Boxlength: Box.length,
                                    Boxwidth: Box.width
                                });

                    }
            })

})

//=================================================================================================================
 
module.exports = app  
