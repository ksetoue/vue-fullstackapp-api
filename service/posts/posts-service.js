const databaseResource = require('../../resources/database/database-resource');

function getAll () {
    return databaseResource.getConnection()
        .then((db) => {
           return []; 
        });
}

const postsService = {
    getAll
};

module.exports = postsService;