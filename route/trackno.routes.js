const express = require('express')
const mongoose = require('mongoose')
const apiDB = require('../models/apitrack')
// const multer = require('multer');
const app = express.Router()
var data
var detail

//ET089578821TH
// app.route('/')
//     .post((req, res) => {
      app.post('/',function(req,res){
        apiDB.find({"trackno":req.body.trackno}, (err, docs) => {
          // console.log("docs")
          // console.log(docs)
          if(err){
            res.send(err)
  
          }else{
                if(docs==''){
                  apiDB.find({"trackno":"Not Found"}, (err, docsNotFound) => {
                  console.log("Not Found")
                  res.send(docsNotFound) //not found
                })
                }else{
                  console.log("OK")
                  res.send(docs) //true
              }
        }

    })
})

//=====================================================================
//   //ET089578821TH
//   app.route('/')
//   .post((req, res) => {
//   data = req.body.trackno
//   // detail = data[0]
//     // console.log(data)
//     console.log(data);
//     console.log("post ok");
//     // res.send({})
//   })
//   if(data==0){

//   }else{
//     app.route('/')
//     .get((req, res) => {
//         apiDB.find({"trackno":data}, (err, docs) => {
//           if(err){
//             apiDB.find({"trackno":"Not Found"}, (err, docs) => {
//               res.send(docs)
//             })
//             data=0
//           }else{
//           res.send(docs) //true
//           // console.log(docs)
//           console.log("get ok");}
//           // console.log(docs);
//           // data=0
//         })

//     })
// }
//=====================================================================

module.exports = app
