let mongoose = require('mongoose');

let bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    genre: String,
    price: Number,
    image: String
});

let bookModel = mongoose.model('book', bookSchema);

module.exports = bookModel;