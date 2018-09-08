const mongoose = require('mongoose');
const postsSchema = require('../schema/posts-schema');

const Post = mongoose.model('posts', postsSchema);

module.exports = Post;