let bookModel = require('../models/book_schema');
function postBooks(req, res) {
   let { name, author, genre, price } = req.body;
   let image = req.file?req.file.originalname:null;
   let book = new bookModel({ name, author, genre, price, image });
   book.save().then((result) => {
      res.status(201).json({ result });
   }).catch((error) => {
      res.status(500).json({ error });
   });
}

async function getBooks(req,res){
    let books = await bookModel.find();
    res.status(200).send(books);
}


async function getImage(req,res){
    let filename = req.params.filename;
    res.sendFile(filename,{root:'./uploads'});
}

async function getBooksByName(req,res){
   let name = req.params.name;
   let books = await bookModel.find({name:{$regex:name,$options:'i'}});
   res.status(200).send(books);
}


module.exports = {postBooks,getBooks,getImage,getBooksByName};