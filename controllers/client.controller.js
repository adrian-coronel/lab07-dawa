const clientSchema = require("../model/client")

module.exports.findAll = (req, res) => {
  clientSchema.find({}, (err, clients) => {
    if (err) 
      return res.status().json({message: "Error mostrando los clientes"});
    console.log(clients)
  })
}