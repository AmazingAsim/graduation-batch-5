import mongoose from "mongoose";

let url= process.env.DATABASE


let dbconnection=()=>{
    return mongoose.connect('mongodb+srv://AmazingAsim:AmazingAsim3000@amazingasim.tqrgz.mongodb.net/rutwik?retryWrites=true&w=majority')
    .then(res=>{console.log('db is connected')})
    .catch(err=>{console.log(err)}
);
}

export default dbconnection;