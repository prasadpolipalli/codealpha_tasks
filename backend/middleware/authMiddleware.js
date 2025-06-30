const jwt = require('jsonwebtoken');
│   │       exports.protect = (req, res, next) => {
│   │           const token = req.headers.authorization;
│   │           if (token) {
│   │               const decoded = jwt.verify(token, process.env.JWT_SECRET);
│   │               req.user = decoded;
│   │               next();
│   │           } else {
│   │               res.status(401).json({ message: 'No token' });
│   │           }
│   │       };