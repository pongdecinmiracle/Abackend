const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const OrderSchema = new Schema({

  OrderID: {type:String, default: null},
  USerID: {type:String, sequence_value:0},
  Firstname_s: {type:String, default: null},
  Lastname_s: {type:String, default: null},
  Address_s: {type:String, default: null},
  Alley_s: {type:String, default: null},
  Street_s: {type:String, default: null},
  District_s: {type:String, default: null},
  State_s: {type:String, default: null},
  Country_s: {type:String, default: null},
  Tel_s: {type:String, default: null},
  Firstname_r: {type:String, default: null},
  Lastname_r: {type:String, default: null},
  Address_r: {type:String, default: null},
  Alley_r: {type:String, default: null},
  Street_r: {type:String, default: null},
  District_r: {type:String, default: null},
  State_r: {type:String, default: null},
  Country_r: {type:String, default: null},
  Tel_r: {type:String, default: null},
  Weight: {type:String, default: null},
  Box_weight: {type:String, default: null},
  Box_length: {type:String, default: null},
  Box_height: {type:String, default: null},
  Create_date: {type:String, default: null},
  Payment_date: {type:String, default: null},
  Dropoff_date: {type:String, default: null},
  Status: {type:String, default: null},


  reg_time : {
            type : Date, default: Date.now
        }
})

const Order = mongoose.model('order', OrderSchema)

module.exports = Order
//==============================================
