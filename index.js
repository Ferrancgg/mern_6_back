const express = require("express");
const cors = require("cors");
const { connectBD } = require("./src/confing/db");
require("dotenv").config();
const app = express();
const PORT = 4001;
app.use(cors());
connectBD();
app.use(express.json());
const indexRouter = require("./src/api/routes/indexRoutes");
app.use("/api/v1", indexRouter);
app.use("*", (req, res, next) => {
  return res
    .status(404)
    .json({ error: "Ruta no encontrada. Verifica tu solicitud." });
});
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
