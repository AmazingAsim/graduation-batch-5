
function getUsers(req,res){
    console.log('controller function executed finally');
    res.send('users');
}

function signup(req,res){
    console.log(`signin data: ${req.body}`)
    res.send(req.body);
}


module.exports = {
    getUsers,
    signup
}