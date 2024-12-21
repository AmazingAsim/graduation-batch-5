let mongoose = require("mongoose");

module.exports = function(){
    mongoose.connect('mongodb://localhost:27017/bookstore').then(res=>{
        console.log("Database connected");
    }).catch(err=>{
        console.log(err);
    })
}