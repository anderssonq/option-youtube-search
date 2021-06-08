const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoredToken = jwt.verify(token, process.env.JWT_KEY);
    req.userData = { email: decoredToken.email, userId: decoredToken.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'You are not authenticated!' });
  }
}