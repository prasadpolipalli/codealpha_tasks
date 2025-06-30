const express = require('express');
const router = express.Router();
const { followUser, getProfile } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/follow/:id', protect, followUser);
router.get('/:id', getProfile);

module.exports = router;