// // 'use strict';
const express = require('express')
const mongoose = require('mongoose')
const apiDB = require('../models/apitrack')
const API_KEY = '533a0476-6493-48e0-9c80-329dc76c6082';
const Aftership = require('./lib/aftership')(API_KEY);
const app = express.Router()
app.route('/')
.post((req, res) => {
  //ET089578821TH
    Aftership.call('GET', '/trackings/thailand-post/'+req.body.tracknumber, function (err, result) {
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
})
module.exports = app
