const jwt = require('jsonwebtoken')

module.exports = async function(req, res, next) {

  // look for access header
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

  jwt.verify(token, process.env.SECRET, function(err, decoded) {

    if (err) return res.status(401).json({ auth: false, message: 'Failed to authenticate token.' });

    // if everything is working correctly, save the user id in the requisition for further use
    req.jwtUserId = decoded.id;
    next();
  });

}