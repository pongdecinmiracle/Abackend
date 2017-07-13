const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const StatusSchema = new Schema({
  UserID: String,
  OrderID: String,
  Cash: String,
  Date: String,
  Position: String,
  Description: String,
  Status: String,
  reg_time : {
            type : Date, default: Date.now
        }
})

const Status = mongoose.model('status', StatusSchema)

module.exports = User
//==============================================
