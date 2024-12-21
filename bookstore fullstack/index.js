let dbConnect = require("./database/database");
dbConnect();
let bookModel = require("./modal/bookModal");

let express = require("express");
let app = express();

app.use(express.static("views"));

app.use();


app.listen(8080,function(){
    console.log("server started on 8080");
})