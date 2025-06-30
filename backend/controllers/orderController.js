const Order = require('../models/Order');
│   │   │   exports.placeOrder = async (req, res) => {
│   │   │       const order = await Order.create({ user: req.user.id, items: req.body.items });
│   │   │       res.json(order);
│   │   │   };