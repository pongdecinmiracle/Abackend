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

  // app.route('/:Name')
  // .get((req, res) => {
  //   Auth.findById(req.params.Name, (err, docs) => {
  //     res.send(docs)
  //   })
  // })
  // .put((req, res) => {
  //   Auth.findByIdAndUpdate(req.params.Name, req.body, (err) => {
  //     if (err) res.send('update error')
  //     else res.send('update success')
  //   })
  // })
  // .delete((req, res) => {
  //   Auth.findByIdAndRemove(req.params.Name, (err) => {
  //     if (err) res.send('delete error')
  //     else res.send('delete success')
  //   })
  // })
module.exports = app
