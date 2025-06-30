const User = require('../models/User');

exports.followUser = async (req, res) => {
  const user = await User.findById(req.user.id);
  const targetUser = await User.findById(req.params.id);

  if (!targetUser.followers.includes(user._id)) {
    targetUser.followers.push(user._id);
    user.following.push(targetUser._id);
    await targetUser.save();
    await user.save();
  }

  res.json({ message: 'Followed user' });
};

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password');
  res.json(user);
};