const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const bookSchema = new Schema(
  {
    title: { type: String, required: true, trim: true },
    publicationDate: { type: Date, required: true },
    genre: { type: String, required: true, trim: true },
    author: { type: String, required: true, trim: true },
  },
  {
    collection: "books",
    timestamps: true,
  }
);

const Book = model("Book", bookSchema);

module.exports = Book;
