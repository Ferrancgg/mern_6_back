const mongoose = require("mongoose");
const connectBD = async () => {
  try {
    await mongoose.connect(process.env.BD_URL);
    console.log("conectado con exito a la BBDD");
  } catch (error) {
    console.log("error al conectar la BBDD");
  }
};
module.exports = { connectBD };
