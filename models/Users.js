const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  Email: {type: String, unique: true},
  Token: {type: String},
  reg_time : {
            type : Date, default: Date.now
        }
})

const User = mongoose.model('user', UserSchema)

module.exports = User
//==============================================
