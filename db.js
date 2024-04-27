const mongoose = require("mongoose")
const url = "mongodb+srv://adriancoronel:miryam2003@cluster0.d5ue7rl.mongodb.net/mean-stack?retryWrites=true&w=majority";

mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, "Error al conectar mongodb-atlas"))
db.once('open', function callback() {
  console.log("¡Conectado a mongodb-atlas!")
});

module.exports = db;