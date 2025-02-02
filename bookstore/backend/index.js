require('dotenv').config();
let express = require('express');
let app = express();
let cors = require('cors');
let dbConnect = require('./config/database');
let book_router = require('./routes/book_routes');
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./views'));
let frontendurl = process.env.frontendurl || 'http://localhost:3000';
app.use(cors({
    origin: frontendurl,
    methods:['GET','POST','DELETE','UPDATE','PUT']
}));
app.use('/books',book_router);
app.listen(8080,function(){console.log("Server is running on port 8080")}); 