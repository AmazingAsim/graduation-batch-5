let mongoose = require("mongoose");

let bookSchema = new mongoose.Schema({
    b_name: String,
    b_price: Number,
    b_author: String,
    b_description: String,
    b_image: String
});

module.exports = mongoose.model("books", bookSchema);

