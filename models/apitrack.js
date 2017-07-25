const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

const Schema = mongoose.Schema

const APISchema = new Schema({
    // trackno: String,
    // slug: String,
    // city: String,
    // created_at: String,
    // location: String,
    // country_name: String,
    // message: String,
    // country_iso3: String,
    // tag: String,
    // checkpoint_time: String,
    // coordinates: String,
    // state: String,
    // zip: String
        Barcode: String,
        Status: String,
        StatusName: String,
        Description: String,
        DateTime: String,
        Signature: String,
        Location: String,
        DeliveryDateTime: String,
        PostCode: String,
        SigCode: String,
        HexCode: String,
        PostGPS: String,
        CountryID: String,
        ItemRow: String,
        FlagRow: String
})
const apiDB = mongoose.model('api', APISchema)

module.exports = apiDB
//==============================================

        