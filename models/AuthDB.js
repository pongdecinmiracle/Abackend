const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const AuthSchema = new Schema({
  Email: {type: String, unique: true},
  Pass: {type: String,require: true},
  Firstname : {type: String,require: true},
  Lastname: {type: String,require: true},
  tel:{type: String,require: true},
  reg_time : {
            type : Date, default: Date.now
        }
})

const Auth = mongoose.model('auth', AuthSchema)

module.exports = Auth
//==============================================
