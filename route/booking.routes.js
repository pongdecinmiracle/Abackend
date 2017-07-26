const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const User = require('../models/Users')
const Order = require('../models/order')
const passport = require('passport')
const jwt = require('jsonwebtoken');
const expressJwt = require('express-jwt');
var omise = require('omise')({
  'secretKey': 'skey_test_58ogpp3d4ytm442ltfd',
  'omiseVersion': '2015-09-10'
});

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



//===== show amount of status =====================================================================================
// show all data that status : Booking & Booking Page show data after create order complete
app.get('/:email', function (req, res) {
    // Order.find({Email:decode.email,Status:"Booking"},(err,docs)=>{
    Order.find({ Email: req.params.email, Status: "Booking" }, (err, docs) => {
        // Order.find({Email:"c@gmail.com",Status:"Booking"},(err,docs)=>{   
        res.json({
            success: true,
            message: "success",
            amount: docs.length,
            Data: docs
        });
    }) 
})
//waiting page show data before payment complete        
app.post('/waiting', function (req, res) {
    var decode = jwt.decode(req.headers['authorization'] || req.body.token);
    // var data = req.body
    // console.log(decode)
    // console.log(req.headers)

    // Order.findOneAndUpdate({"_id" : data.OrderId[i] , Email: decode.email} , Dropdata ,function(err,docs){
    //
    Order.find({ Email: decode.email, Status_logistic: "success", Status: "Waiting" }, function (err, docs) {
        if (err) {

        } else {
            res.json({
                message: "success",
                amount: docs.length,
                data: docs
            })
            // console.log(docs)
        }

    })//findOne


    // var data = req.body







})
//Shipping page show data before send from get parcel to dropoff complete        
app.post('/shipping', function (req, res) {
    var decode = jwt.decode(req.headers['authorization'] || req.body.token);
    // var data = req.body
    // console.log(data)

    // Order.findOneAndUpdate({"_id" : data.OrderId[i] , Email: decode.email} , Dropdata ,function(err,docs){
    //
    Order.find({ Email: decode.email, Status_logistic: "success", Status: "Shipping" }, function (err, docs) {
        if (err) {

        } else {
            res.json({
                message: "success",
                amount: docs.length,
                data: docs
            })
            // console.log(docs)
        }

    })//findOne


    // var data = req.body







})
//Complete page show data before payment complete        
app.post('/complete', function (req, res) {
    var decode = jwt.decode(req.headers['authorization'] || req.body.token);
    // var data = req.body
    // console.log(data)

    // Order.findOneAndUpdate({"_id" : data.OrderId[i] , Email: decode.email} , Dropdata ,function(err,docs){
    //
    Order.find({ Email: decode.email, Status_logistic: "success", Status: "Complete" }, function (err, docs) {
        if (err) {

        } else {
            res.json({
                message: "success",
                amount: docs.length,
                data: docs
            })
            // console.log(docs)
        }

    })//findOne


    // var data = req.body







})
//=================================================================================================================

//=================================================================================================================
//from pay all --> choose DropOff (API)
app.put('/prepare', function (req) {
    var decode = jwt.decode(req.headers['authorization'] || req.body.token);
    var data = req.body
    var collect = (data.userinfo.OrderId).split(" ")
    var l = collect.length
    // console.log(data)
    Dropdata = {
        Status_logistic: "Prepare"
    }
    console.log(data)
    console.log(decode.email)
    console.log(collect)
    console.log(Dropdata)
    for (var i = 1; i < l; i++) {
        Order.findOneAndUpdate({ _id: collect[i], Email: decode.email }, Dropdata, function (err, docs) {
            // Order.findOneAndUpdate({"_id" : collect[i] , Email: "pong@gmail.com"} , Dropdata ,function(err,docs){
            if (err) {

            } else {

                // console.log(docs)
            }

        })//findOne
    }
    console.log("pass")





})
//choose dropoff location
app.put('/dropoff', function (req) {
    var decode = jwt.decode(req.headers['authorization'] || req.body.token);
    var data = req.body.userinfo
    // var header = req.headers
    console.log(data)
    // console.log(header)
    // @body.location
    // @body.OrderId
    Dropdata = {
        Drop_location: data.location,
    }
    console.log(Dropdata)

    // Order.findOneAndUpdate({"_id" : data.OrderId[i] , Email: decode.email} , Dropdata ,function(err,docs){
    Order.update({ Email: decode.email, Status_logistic: "Prepare", Status: "Booking" }, { $set: Dropdata }, { multi: true }, function (err, docs) {
        if (err) {

        } else {

            // console.log(docs)
        }

    })//findOne


    // var data = req.body







})
//show all data : before payment --> send back to Front
app.post('/showinfo', function (req, res) {
    var decode = jwt.decode(req.headers['authorization'] || req.body.token);
    // var data = req.body.userinfo
    // var header = req.headers
    // console.log(data)
    // console.log(header)
    // @body.location
    // @body.OrderId
    //  Dropdata = {
    //      Drop_location : data.location,
    //  }
    // console.log(Dropdata)

    // Order.findOneAndUpdate({"_id" : data.OrderId[i] , Email: decode.email} , Dropdata ,function(err,docs){
    //real function
    Order.find({ Email: decode.email,Status_logistic:"Prepare",Status:"Booking"}  ,function(err,docs){
    // Order.find({ Email: decode.email, Status_logistic: "Waiting", Status: "Booking" }, function (err, docs) {
        if (err) {

        } else {
            res.json({
                data: docs,
                price: parseFloat(docs.Price),
                length: docs.length
            })
            // console.log(docs)
        }

    })//findOne   
})
//=================================================================================================================
//API for Omise 
app.post('/omise', function(req,res){
  console.log(req.body);
  var omise = require('omise')({
    'secretKey': 'skey_test_58ogpp3d4ytm442ltfd',
    'omiseVersion': '2015-09-10'
  })
 
  omise.charges.create({
    // 'description': 'Charge for order ID: 888',
    'description': req.body.description,//res.description
    'amount': req.body.amount,//'30000', // 300 Baht // res.amount 
    'currency': 'thb',
    'capture': true,
    'card': req.body.omiseToken
  }, function(err, resp) {
      var check = resp.status
    if (check==="successful")
    res.redirect('http://localhost:3000/service-booking-complete')
    else{
    res.redirect('http://localhost:3000/service-booking-payment')
    }
    })
  })

//=================================================================================================================
//after payment must save to DB
// app.post('/save', function (req) {
//     var decode = jwt.decode(req.headers['authorization'] || req.body.token);
//     console.log(decode)
//     var data = req.body.userinfo
//     var collect = (data.OrderId).split(" ")
//     var l = collect.length
//     // console.log(data)
//     var Datapost = {
//         // Price : data.price,
//         // _id : data.orderId,
//         Status_logistic: "success",
//         Status: "Waiting"
//     }
//     for (var i = 1; i < l; i++) {
//         Order.findOneAndUpdate({ _id:collect[i],Email: decode.email, Status_logistic: "Prepare", Status: "Booking" }, Datapost , function (err, docs) {
//             if (err) {

//             } else {

//                 // console.log(docs)
//             }

//         })
//     }

// })
//=================================================================================================================
// // route to return all users (POST http://localhost:3002/booking/:OrderId)
app.put('/delete', function (req) {
    var data = req.body
    // console.log(data)
    if (data.userinfo.OrderId === " ") {
        //     res.json({
        //         status: false,message: "no data"
        //   })
    } else {
        var collect = (data.userinfo.OrderId).split(" ")
        var l = collect.length
        // console.log(collect)
        // console.log(l)
        for (var i = 1; i < l; i++) {
            // console.log(collect[i])
            Order.remove({ _id: collect[i] },
                function (err, data) {


                })



        }

    }
})
//=================================================================================================================
// // route to return all users (POST http://localhost:3002/logistic/dropoff)
//         app.put('/test',function(req){
//             var decode = jwt.decode(req.headers['authorization']||req.body.token );
//             var data = req.body
//             console.log(data)
//             Dropdata = {
//                      Status_logistic:"success",
//                      Status : "Complete"
//                  }
//             // for(var i=1;i<l;i++){
//                 // Order.findOneAndUpdate({"_id" : collect[i] , Email: decode.email} , Dropdata ,function(err,docs){
//                     Order.findOneAndUpdate({"_id" : data.OrderId , Email: "pong@gmail.com"} , Dropdata ,function(err,docs){
//                         if(err){

//                         }else{

//                                 // console.log(docs)
//                         }

//                     // })//findOne
//             })
//             console.log("pass")   





// })
//=================================================================================================================

module.exports = app  
