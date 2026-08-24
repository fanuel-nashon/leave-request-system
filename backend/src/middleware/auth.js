const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next){
    const authHeader = req.headers['authorization'];
    if(!authHeader){
        return res.status(401).json({
            success:false,
            message:'No token provided - please log in'
        });
    }
    // split bearer token
    const token = authHeader.split(' ')[1];
    if(!token){
        return res.status(401).json({success:false, message:'Invalid token format'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // attach the decoded user to the request
        req.user=decoded;
        next();
    } catch (err) {
        return res.status(401).json({success:false, message:'Invalid request - login again'});
    }
}

module.exports = authMiddleware;