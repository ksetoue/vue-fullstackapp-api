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
        throw new TypeError('Invalid arguments'); 
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

const postsService = {
    getAll,
    createPost
};

module.exports = postsService;