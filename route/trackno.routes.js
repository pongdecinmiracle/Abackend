const express = require('express')
const mongoose = require('mongoose')
const apiDB = require('../models/apitrack')
const jwt = require('jsonwebtoken'); 
const expressJwt = require('express-jwt');
const secret = require('./lib/secret')
const TrackService = require('./lib/TrackService');
const trackService = new TrackService({lang: "EN"});
const app = express.Router()
var data
var detail
var token

//@ ET089578821TH
//@ EY405510580TH

//=================================================================================================================
        // // @route middleware to verify a token
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

     

//=====================================================================
// //  @   check track number from DB

//         app.post('/',function(req,res){
                
//                 apiDB.find({"trackno":req.body.trackno}, (err, docs) => {
//                   if(err){
//                     res.send(err)
          
//                   }else{
//                         if(docs==''){
//                           apiDB.find({"trackno":"Not Found"}, (err, docsNotFound) => {
//                           console.log("Not Found")
//                           res.send(docsNotFound) //@if not found
//                         })
//                         }else{
//                           console.log("OK")
//                           res.send(docs) //@if true
//                       }
//                 }

//             })

//         })


//=====================================================================
//"StatusName":"not found"
app.post('/',function(req,res){
	trackService.init(function(err, serv) {
  var trackno = req.body.trackno;
	serv.getItem(trackno, function(err, result) {
      if(result.ItemsData.Items[0].Barcode==''){
            apiDB.find({"trackno":"Not Found"}, (err, docsNotFound) => {
                    res.json(docsNotFound) //@if not found
                })
      }else if(result.ItemsData.Items[0].StatusName=='not found'){
            apiDB.find({"trackno":"Not Found"}, (err, docsNotFound) => {
                    res.json(docsNotFound) //@if not found
                })
      }else{
        res.json(result.ItemsData.Items);
      }
		});
	});
});
//=====================================================================




module.exports = app
