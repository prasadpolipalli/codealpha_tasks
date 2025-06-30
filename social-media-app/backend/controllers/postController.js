const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.createPost = async (req, res) => {
  const post = await Post.create({ user: req.user.id, content: req.body.content });
  res.status(201).json(post);
};

exports.likePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post.likes.includes(req.user.id)) {
    post.likes.push(req.user.id);
    await post.save();
  }
  res.json({ message: 'Post liked' });
};

exports.commentPost = async (req, res) => {
  const comment = await Comment.create({ user: req.user.id, post: req.params.id, text: req.body.text });
  const post = await Post.findById(req.params.id);
  post.comments.push(comment._id);
  await post.save();
  res.status(201).json(comment);
};