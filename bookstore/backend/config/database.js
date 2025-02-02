let mongoose = require('mongoose');
let uri = process.env.DATABASE;

function dbConnect(){
    mongoose.connect(uri).then((res) => {
        console.log('Database connected');
    }).catch(error=>console.log(error))
}

module.exports = dbConnect;