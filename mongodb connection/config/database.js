let mongoose = require('mongoose');

let uri = 'mongodb://127.0.0.1:27017/gradb5';

function dbConnect(){
    return mongoose.connect(uri).then(res=>{
        console.log('Database connected');
    }).catch(err=>{
        console.log(err);
    });
}

module.exports = dbConnect;