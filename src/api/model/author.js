const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const authorSchema = new Schema(
  {
    nombre: { type: String, required: true, trim: true },
    nacionalidad: { type: String, required: true, trim: true },
    libros: [{ type: mongoose.Schema.Types.ObjectId, ref: "Book" }], // Referencia al modelo Book
    premios: [{ type: String, trim: true }], // Lista de premios como cadenas
  },
  { timestamps: true } // Añade createdAt y updatedAt automáticamente
);

const Author = model("Author", authorSchema);

module.exports = { Author };
