const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
  const authHeader = req.header('Authorization');
  if (!authHeader) {
      return res.status(401).json({ error: 'Unauthorized' });
  }
  const tokenArray = authHeader.split(' ');
  if (tokenArray.length !== 2 || tokenArray[0] !== 'Bearer') {
      return res.status(403).json({ error: 'Invalid token format' });
  }
  const token = tokenArray[1];

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
          return res.status(403).json({ error: 'Invalid token' });
      }
      req.user = user;
      next();
  });
};


module.exports = authenticateJWT;
