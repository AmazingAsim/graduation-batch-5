function logCookies(req,res,next){ //middleware function
    console.log(req.cookies);
    next(); //pass control to next middleware
};
module.exports = logCookies;