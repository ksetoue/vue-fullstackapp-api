const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

// Loading environment dev variable
try {
    dotenv.config();
} catch (e) {

}

const PORT = process.env.PORT || 8080;


const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(morgan('combined'));

server.get('/', (req, res, next) => {
    res.status(200).json({
        hello: ', world!'
    });
})

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});