const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const AuthSchema = new Schema({
  Name : {type: String,require: true},
  Email: {type: String, unique: true},
  Lastname: {type: String,require: true},
  Pass: {type: String,require: true},
  reg_time : {
            type : Date, default: Date.now
        }
})

const Auth = mongoose.model('auth', AuthSchema)

module.exports = Auth
//==============================================
