const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postsSchema = new Schema({
    user: { 
        type: String,
        required: true,
        minlength: 5
    },

    title: { 
        type: String,
        required: true,
        minlength: 2
    }, 
    
    content: {
        type: String,
        required: true,
        maxlength: 140
    },
    
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = postsSchema;