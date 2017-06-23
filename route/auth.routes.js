const express = require('express')
const mongoose = require('mongoose')
const Auth = require('../models/AuthDB')
const app = express.Router()
  app.route('/')
    .get((req, res) => {
      Auth.find({}, (err, docs) => {
        res.send(docs)
        console.log(docs)
      })
    })
    .post((req, res) => {
      var newTrack = Auth(req.body)
      newTrack.save((err) => {
        if (err) res.send('insert error')
        else res.send('insert success')
      })
    })
module.exports = app
