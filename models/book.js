const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  authors: { type: String },
  description: { type: String },
  image: { type: String, default: "" },
  link: { type: String, default: "", unique: true },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
