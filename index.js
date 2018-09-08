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


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.get('/', (req, res, next) => {
    res.status(200).json({
        hello: ', world!'
    });
})

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});