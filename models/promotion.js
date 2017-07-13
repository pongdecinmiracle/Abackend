const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const PromotionSchema = new Schema({
  Admin: String,
  detail: String,
  Pic: String,
  reg_time : {
            type : Date, default: Date.now
        }
})

const Promotion = mongoose.model('promotion', PromotionSchema)

module.exports = User
//==============================================
