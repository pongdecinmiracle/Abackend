const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const app = express.Router()
app.route('/')
  // .post((req, res) => {
  //   Auth.find({$and:[{"Email":req.body.Email},{"Pass":req.body.Pass}]}, (err, docs) => {
  //     res.send("Login")
  //     console.log(docs)
  //   })
  // })
module.exports = app
