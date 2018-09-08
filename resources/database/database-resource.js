const mongoose = require('mongoose');

let _databaseConnection = null;

function createConnection (resolve, reject) {
    return new Promise((resolve, reject) => {
        mongoose.connect(process.env.DB_CONN_STRING, {useNewUrlParser: true});
        _databaseConnection = mongoose.connection;

        _databaseConnection.once('open', () => {
            resolve(_databaseConnection);
        })

        _databaseConnection.once('error', (error) => {
            _databaseConnection = null;
            reject(error);
        })
    })

}

function getConnection () {
    return new Promise ((resolve, reject) => {
        if (_databaseConnection) {
            return resolve(_databaseConnection);
        }

        createConnection()
            .then(resolve)
            .catch(reject);
    })
}

function closeConnection () {
    if (_databaseConnection) {
        try {
            _databaseConnection.close();
        } catch (e) {

        }
        _databaseConnection = null;
    }
}

const databaseResource = {
    getConnection,
    closeConnection
}

module.exports = databaseResource;