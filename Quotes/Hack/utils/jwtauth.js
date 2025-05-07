const jwt = require("jsonwebtoken")
const JWT_SECRET = "Assignment@09"

function createToken(user){
    const payload = {id:user }
    const token = jwt.sign(payload,JWT_SECRET , {expiresIn : "1d"})
    return token;
}

function verifyToken(token){
    try{
        const decoded = jwt.verify(token,JWT_SECRET)
        return decoded
    }
    catch(err){
        console.log("token verification failed: ",err)
        return null;
    }
}

function jwtAuth(req,res,next){
    const nonProtectedUrls = ["/users/signin","/users/register"]
    if(nonProtectedUrls.indexOf(req.url) >= 0){
        next()
        return
    }
    //console.log("auth---" + req.headers.authorization)
    if(!req.headers.authorization)
        res.status(403).send("unauthorized access  - no authorized header")
    const [bearer , token ] = req.headers.authorization.split(" ")
    const decoded = verifyToken(token)
    if(!decoded)
        res.status(403).send("unauthorized access  - invalid token")
    else{
        req.user = {id: decoded.id }
        next()
    }
}

module.exports = {
    createToken,
    jwtAuth,
}