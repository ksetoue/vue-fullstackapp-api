const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');

const postsController = require('./controller/posts-controller');

const server = express();

// Loading environment dev variable
try {
    dotenv.config();
} catch (e) {
    
}

const PORT = process.env.PORT || 8080;

// Server configs
server.use(cors());
server.use(bodyParser.json());
server.use(morgan('combined'));


// Server Routes
server.use('/posts', postsController);

server.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});