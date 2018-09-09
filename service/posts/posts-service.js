const Post = require('./model/post');

const databaseResource = require('../../resources/database/database-resource');

function getAll () {
    return databaseResource.getConnection()
        .then((db) => {
           let query = Post.find({});
           return query.exec();
        });
}

function createPost ({ user, title, content } = {}) {
    
    if (!user || !title || !content) {
        return Promise.reject(new TypeError('Invalid arguments'));
    }

    return databaseResource.getConnection()
        .then((db) => {
            let post = new Post ({
                user, 
                title, 
                content
            });

            return post.save(); 
        })
}

function updatePost (_id, { user, title, content } = {}) {
    if (!_id) {
        return Promise.reject(new TypeError('Invalid arguments: id is required'));
    }
    
    if (!user && !title && !content) {
        return Promise.reject(new TypeError('Invalid arguments: should receive at least one property to update'));
    }

    return databaseResource.getConnection()
        .then((db) => {
            return Post.findByIdAndUpdate(_id, {
                $set: {
                    user,
                    title,
                    content
                }
            }, 
            { new: true });
        });
}

function deletePost (_id) {
    if (!_id) {
        return Promise.reject(new TypeError('Invalid arguments: id is required'));
    }

    return databaseResource.getConnection()
        .then((db) => {
            return Post.remove({ _id });
        });
}

const postsService = {
    getAll,
    createPost,
    deletePost,
    updatePost
};

module.exports = postsService;