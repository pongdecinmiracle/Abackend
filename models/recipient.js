const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const RecipientSchema = new Schema({
  Firstname_r: String,
  Lastname_r: String,
  Address_r: String,
  Alley_r: String,
  Street_r: String,
  District_r: String,
  State_r: String,
  Country_r: String,
  Tel_r: String,
  reg_time : {
            type : Date, default: Date.now
        }
})

const Recipient = mongoose.model('recipient', RecipientSchema)

module.exports = Recipient
//==============================================
