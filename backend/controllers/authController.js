const User = require('../models/User');
│   │   │   const bcrypt = require('bcryptjs');
│   │   │   const jwt = require('jsonwebtoken');
│   │   │   exports.register = async (req, res) => {
│   │   │       const { username, password } = req.body;
│   │   │       const hashed = await bcrypt.hash(password, 10);
│   │   │       const user = await User.create({ username, password: hashed });
│   │   │       res.json(user);
│   │   │   };
│   │   │   exports.login = async (req, res) => {
│   │   │       const user = await User.findOne({ username: req.body.username });
│   │   │       if (user && await bcrypt.compare(req.body.password, user.password)) {
│   │   │           const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
│   │   │           res.json({ token });
│   │   │       } else {
│   │   │           res.status(401).json({ message: 'Invalid credentials' });
│   │   │       }
│   │   │   };