const express = require('express')
const mongoose = require('mongoose')
const apiDB = require('../models/apitrack')
// const multer = require('multer');
const app = express.Router()
var data
var detail
  // app.use((req,res,next)=>{
  //   console.log('hello');
  //   next();
  // })
  //ET089578821TH
  app.route('/')
  .post((req, res) => {
  data = req.body.trackno
  // detail = data[0]
    // console.log(data)
    console.log(data);
    console.log("post ok");
    // res.send({})
  })
  if(data==0){

  }else{
    app.route('/')
    .get((req, res) => {
        apiDB.find({"trackno":data}, (err, docs) => {
          if(err){
            apiDB.find({"trackno":"Not Found"}, (err, docs) => {
              res.send(docs)
            })
            data=0
          }else{
          res.send(docs) //true
          // console.log(docs)
          console.log("get ok");}
          // console.log(docs);
          // data=0
        })

    })
}

module.exports = app
