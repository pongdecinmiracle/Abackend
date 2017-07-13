const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const SenderSchema = new Schema({
  Firstname_s: String,
  Lastname_s: String,
  Address_s: String,
  Alley_s: String,
  Street_s: String,
  District_s: String,
  State_s: String,
  Country_s: String,
  Tel_s: String,
  reg_time : {
            type : Date, default: Date.now
        }
})

const Sender = mongoose.model('sender', SenderSchema)

module.exports = Sender
//==============================================
