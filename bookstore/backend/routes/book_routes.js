let express = require('express');
let router = express.Router();
let bookController = require('../controller/book_controller');
let uploads = require('../middlewares/multer');
let path = require('path');
router.get('/', bookController.getBooks);
router.post('/addBook',uploads.single('image'), bookController.postBooks);
router.get('/getimage/:filename',bookController.getImage);

module.exports = router;