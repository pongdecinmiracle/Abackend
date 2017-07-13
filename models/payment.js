const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const PaymentSchema = new Schema({
  UserID: String,
  OrderID: String,
  Firstname: String,
  Lastname: String,
  Cash: String,
  Date: String,
  Time: String,
  reg_time : {
            type : Date, default: Date.now
        }
})

const Payment = mongoose.model('payment', PaymentSchema)

module.exports = User
//==============================================
