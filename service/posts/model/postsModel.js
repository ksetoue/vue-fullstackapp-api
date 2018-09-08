const mongoose = require('mongoose');
const postsSchema = require('../schema/postsSchema');

const postsModel = mongoose.model('posts', postsSchema);

module.exports = postsModel;