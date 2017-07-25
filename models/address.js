const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
// const autoIncrement = require('mongoose-auto-increment');
const Schema = mongoose.Schema

const AddressSchema = new Schema({
 //============User=====================================
  Email : {type:String, default: null},
  //============receiver==================================
  Firstname_r: {type:String, default: null},
  Lastname_r: {type:String, default: null},
  Address_r: {type:String, default: null},
  Tel_r: {type:String, default: null},
  Email_r:{type:String, default: null},
  reg_time : {
            type : Date, default: Date.now
        }
})
// const Order = mongoose.model('order', OrderSchema)

//------------------------------------------------
// autoIncrement.initialize(mongoose.connection);
// AddressSchema.plugin(autoIncrement.plugin, 'Counter');
var Address = mongoose.model('address', AddressSchema);


//------------------------------------------------
module.exports = Address
//==============================================
