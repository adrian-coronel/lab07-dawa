const mongoose = require("mongoose")
const Schema = mongoose.Schema

const clientSchema = new Schema({
  name: String,
  lastname: String,
  dni: String,
  phone: String,
}, { versionKey: false})


module.exports = mongoose.model("clients", clientSchema)