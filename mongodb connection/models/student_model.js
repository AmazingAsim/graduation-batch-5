let mongoose = require('mongoose');

let studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String
});

module.exports = mongoose.model('student', studentSchema);