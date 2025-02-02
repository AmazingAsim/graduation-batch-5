let dbConnect = require('./config/database.js');
let Student = require('./models/student_model.js');
dbConnect();

let newStudent = new Student({name: 'alok', age: 22, email: 'alok@gmail.com'});

newStudent.save().then(res=>console.log(res)).catch(err=>console.log(err));