const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema

const OrderSchema = new Schema({
 //============Order=====================================
  OrderID: {type:String, default: null},
  Email : {type:String, default: null},
  UserID: {type: Number, default: 0 },
  //===========sender====================================
  Firstname_s: {type:String, default: null},
  Lastname_s: {type:String, default: null},
  Address_s: {type:String, default: null},
  Alley_s: {type:String, default: null},
  Street_s: {type:String, default: null},
  District_s: {type:String, default: null},
  State_s: {type:String, default: null},
  Country_s: {type:String, default: null},
  Tel_s: {type:String, default: null},
  //============receiver==================================
  Firstname_r: {type:String, default: null},
  Lastname_r: {type:String, default: null},
  Address_r: {type:String, default: null},
  Alley_r: {type:String, default: null},
  Street_r: {type:String, default: null},
  District_r: {type:String, default: null},
  State_r: {type:String, default: null},
  Country_r: {type:String, default: null},
  Tel_r: {type:String, default: null},
  //============Parcel=====================================
  Weight: {type:String, default: null},
  Box_width: {type:String, default: null},
  Box_length: {type:String, default: null},
  Box_height: {type:String, default: null},
  //============Logistic===================================
  Logistic: {type:String, default: null},
  //============Date=======================================
  Create_date: {type:String, default: null},
  Payment_date: {type:String, default: null},
  Dropoff_date: {type:String, default: null},
  reg_time : {
            type : Date, default: Date.now
        },
  //============Status=====================================
  Status: {type:String, default: null}
})
// const Order = mongoose.model('order', OrderSchema)

//------------------------------------------------
autoIncrement.initialize(mongoose.connection);
OrderSchema.plugin(autoIncrement.plugin, 'Counter');
var Order = mongoose.model('order', OrderSchema);


//------------------------------------------------
module.exports = Order
//==============================================
