let express = require('express');
let router = express.Router();
let usercontroller = require('../controller.js/users_controller');
let uploads = require('../middlewares/multer');

let logCookies = require('../middlewares/auth');
router.use(logCookies);

router.post('/signup',usercontroller.signup);
router.get('/',usercontroller.getUsers);


function middlewareusers(req,res,next){
    console.log('middleware function executed');
    // res.send('middleware function took the control'); 
    next();
}


router.post('/profile',uploads.single('profile'),function(req,res){
    if(!req.file){
        res.send('no file uploaded');
    }else{
        res.send('file uploaded successfully');
    }
});


router.get('/usercookies',function(req,res){
    res.cookie('name','asim',{maxAge:1000*60*60*24*7,httpOnly:true}).send('cookie set');
})
module.exports = router;