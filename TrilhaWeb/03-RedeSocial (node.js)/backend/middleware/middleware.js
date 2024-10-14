const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).send('não autorizado');
  }

  try {
    const jwtToken = token.split(' ')[1];
    const decoded = jwt.verify(jwtToken, 'env');
    req.userId = decoded.id;
    req.userEmail = decoded.email;
    next();
  } catch (error) {
    return res.status(401).send('Token inválido');
  }
};

module.exports = verifyToken;
