const jwt = require('jsonwebtoken');

const isAuthenticated = async (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) return res.status(401).json({ auth: false, message: "No token provide" });

    await jwt.verify(token, process.env.SECRET, function(err, decoded) {
        if (err) return res.status(500).json({ auth: false, message: "Authentication failed" });
        
        req.userId = decoded._id;
        next();
    });
}

module.exports = isAuthenticated;