const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if(!token){
        return res.status(401).json({
            msg: 'No token found, permission denied'
        })
    }

    try{
        const openToken = jwt.verify(token, process.env.SECRET);
        req.user = openToken.user;
        next();
    }catch(e){
        res.status(404).json({
            msg: 'There was an error.',
            error: e
        })
    }
}