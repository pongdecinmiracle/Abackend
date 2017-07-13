// @ add Tracking Number to Database
const express = require('express')
const mongoose = require('mongoose')
const apiDB = require('../models/apitrack')
const API_KEY = '533a0476-6493-48e0-9c80-329dc76c6082';
const Aftership = require('./lib/aftership')(API_KEY);
const app = express.Router()
// ======================================================================================
var data
var length
app.route('/')
.post((req, res) => {
  //ET089578821TH //thailand-post 13
  //SUKS000364004 //Kerry thai 13
  //CHI05458231   //Sendit 11
  //779227473170  //FedEx 12
  //1504340305    //DHL 10
  data = req.body.tracknumber
  length = data.length
  if(data[11]=='T' && data[12]=='H' && length==13){
    // console.log("thailand-post");
    Aftership.call('GET', '/trackings/thailand-post/'+data, function (err, result) {
   if (err) {
     console.log(err);
   } else {
     // console.log(result.data.tracking.tracking_number);
      var Itemlen = Object.keys(result.data.tracking.checkpoints).length;
      for(var i=0;i<Itemlen;i++){
                  var ApiAdd = new apiDB({
                  trackno: result.data.tracking.tracking_number,
                  slug: result.data.tracking.checkpoints[i].slug,
                  city: result.data.tracking.checkpoints[i].city,
                  created_at: result.data.tracking.checkpoints[i].created_at,
                  location: result.data.tracking.checkpoints[i].location,
                  country_name: result.data.tracking.checkpoints[i].country_name,
                  message: result.data.tracking.checkpoints[i].message,
                  country_iso3: result.data.tracking.checkpoints[i].country_iso3,
                  tag: result.data.tracking.checkpoints[i].tag,
                  checkpoint_time: result.data.tracking.checkpoints[i].checkpoint_time,
                  coordinates: result.data.tracking.checkpoints[i].coordinates,
                  state: result.data.tracking.checkpoints[i].state,
                  zip: result.data.tracking.checkpoints[i].zip
                })
                ApiAdd.save(function (err, fluffy) {
                          if (err) return console.error(err);
                          else console.log("Save Success");
                      });
          }
        }
    })
  }else if(data[0]=='S' && data[1]=='U' && data[2]=='K' && length==13){
    // console.log("Kerrythai");
    Aftership.call('GET', '/trackings/kerry-logistics/'+data, function (err, result) {
   if (err) {
     console.log(err);
   } else {
     // console.log(result.data.tracking.tracking_number);
      var Itemlen = Object.keys(result.data.tracking.checkpoints).length;
      for(var i=0;i<Itemlen;i++){
                  var ApiAdd = new apiDB({
                  trackno: result.data.tracking.tracking_number,
                  slug: result.data.tracking.checkpoints[i].slug,
                  city: result.data.tracking.checkpoints[i].city,
                  created_at: result.data.tracking.checkpoints[i].created_at,
                  location: result.data.tracking.checkpoints[i].location,
                  country_name: result.data.tracking.checkpoints[i].country_name,
                  message: result.data.tracking.checkpoints[i].message,
                  country_iso3: result.data.tracking.checkpoints[i].country_iso3,
                  tag: result.data.tracking.checkpoints[i].tag,
                  checkpoint_time: result.data.tracking.checkpoints[i].checkpoint_time,
                  coordinates: result.data.tracking.checkpoints[i].coordinates,
                  state: result.data.tracking.checkpoints[i].state,
                  zip: result.data.tracking.checkpoints[i].zip
                })
                ApiAdd.save(function (err, fluffy) {
                          if (err) return console.error(err);
                          else console.log("Save Success");
                      });
          }
        }
    })
  }else if(data[0]=='C' && data[1]=='H' && data[2]=='I' && length==11){
    // console.log("Sendit");
    Aftership.call('GET', '/trackings/sendit/'+data, function (err, result) {
   if (err) {
     console.log(err);
   } else {
     // console.log(result.data.tracking.tracking_number);
      var Itemlen = Object.keys(result.data.tracking.checkpoints).length;
      for(var i=0;i<Itemlen;i++){
                  var ApiAdd = new apiDB({
                  trackno: result.data.tracking.tracking_number,
                  slug: result.data.tracking.checkpoints[i].slug,
                  city: result.data.tracking.checkpoints[i].city,
                  created_at: result.data.tracking.checkpoints[i].created_at,
                  location: result.data.tracking.checkpoints[i].location,
                  country_name: result.data.tracking.checkpoints[i].country_name,
                  message: result.data.tracking.checkpoints[i].message,
                  country_iso3: result.data.tracking.checkpoints[i].country_iso3,
                  tag: result.data.tracking.checkpoints[i].tag,
                  checkpoint_time: result.data.tracking.checkpoints[i].checkpoint_time,
                  coordinates: result.data.tracking.checkpoints[i].coordinates,
                  state: result.data.tracking.checkpoints[i].state,
                  zip: result.data.tracking.checkpoints[i].zip
                })
                ApiAdd.save(function (err, fluffy) {
                          if (err) return console.error(err);
                          else console.log("Save Success");
                      });
          }
        }
    })
  }else if(length==12){
    // console.log("FedEx");
    Aftership.call('GET', '/trackings/fedex/'+data, function (err, result) {
   if (err) {
     console.log(err);
   } else {
     // console.log(result.data.tracking.tracking_number);
      var Itemlen = Object.keys(result.data.tracking.checkpoints).length;
      for(var i=0;i<Itemlen;i++){
                  var ApiAdd = new apiDB({
                  trackno: result.data.tracking.tracking_number,
                  slug: result.data.tracking.checkpoints[i].slug,
                  city: result.data.tracking.checkpoints[i].city,
                  created_at: result.data.tracking.checkpoints[i].created_at,
                  location: result.data.tracking.checkpoints[i].location,
                  country_name: result.data.tracking.checkpoints[i].country_name,
                  message: result.data.tracking.checkpoints[i].message,
                  country_iso3: result.data.tracking.checkpoints[i].country_iso3,
                  tag: result.data.tracking.checkpoints[i].tag,
                  checkpoint_time: result.data.tracking.checkpoints[i].checkpoint_time,
                  coordinates: result.data.tracking.checkpoints[i].coordinates,
                  state: result.data.tracking.checkpoints[i].state,
                  zip: result.data.tracking.checkpoints[i].zip
                })
                ApiAdd.save(function (err, fluffy) {
                          if (err) return console.error(err);
                          else console.log("Save Success");
                      });
          }
        }
    })
  }else if(length==10){
    // console.log("DHL");
    Aftership.call('GET', '/trackings/dhl/'+data, function (err, result) {
   if (err) {
     console.log(err);
   } else {
     // console.log(result.data.tracking.tracking_number);
      var Itemlen = Object.keys(result.data.tracking.checkpoints).length;
      for(var i=0;i<Itemlen;i++){
                  var ApiAdd = new apiDB({
                  trackno: result.data.tracking.tracking_number,
                  slug: result.data.tracking.checkpoints[i].slug,
                  city: result.data.tracking.checkpoints[i].city,
                  created_at: result.data.tracking.checkpoints[i].created_at,
                  location: result.data.tracking.checkpoints[i].location,
                  country_name: result.data.tracking.checkpoints[i].country_name,
                  message: result.data.tracking.checkpoints[i].message,
                  country_iso3: result.data.tracking.checkpoints[i].country_iso3,
                  tag: result.data.tracking.checkpoints[i].tag,
                  checkpoint_time: result.data.tracking.checkpoints[i].checkpoint_time,
                  coordinates: result.data.tracking.checkpoints[i].coordinates,
                  state: result.data.tracking.checkpoints[i].state,
                  zip: result.data.tracking.checkpoints[i].zip
                })
                ApiAdd.save(function (err, fluffy) {
                          if (err) return console.error(err);
                          else console.log("Save Success");
                      });
          }
        }
    })
  }else{
    // console.log("Not Found");
  }

})
module.exports = app
