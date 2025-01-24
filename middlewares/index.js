let express = require('express');
let app = express();
let cookieParser = require('cookie-parser');
let userRouter = require('./routes/users_routes');
app.use(express.urlencoded({extended:true}));
app.use(cookieParser())
app.use(express.json());
app.use(express.static(__dirname + '/views'));
app.use('/users',userRouter);
// let jwt = require('jsonwebtoken');
// let payload = {name:'amit',email:'yqk5M@example.com'};
// let token = jwt.sign(payload,'batman');
// console.log(token);
// let v = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYW1pdCIsImVtYWlsIjoieXFrNU1AZXhhbXBsZS5jb20iLCJpYXQiOjE3Mzc3Mjk4ODh9.MVCT6nDn12zoj_LlmzProJJN2l4SZznyagUl1aONDTU','batman');
// console.log(v);

let bcrypt = require('bcrypt');
let salt = bcrypt.genSaltSync(10);
let hash = bcrypt.hashSync('12345',salt);

bcrypt.compare('123',hash,function(err,result){
    console.log(result);
})


app.listen(8080,function(){
    console.log('listening on port 8080')
})