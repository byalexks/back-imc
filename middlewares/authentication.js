const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => { 
    const token = req.get('token')

    try {
        const dataDecoded = await jwt.verify(token, process.env.SEED)
        req.user = dataDecoded.user;
        next();
    } catch (err) {
       res.status(401).json({ok: true, err})
    }

}   

module.exports = {
    verifyToken
}