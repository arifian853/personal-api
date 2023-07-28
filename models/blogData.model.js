const mongoose = require('mongoose')

const blogArticleSchema = new mongoose.Schema({
    id : {
        type: String,
        required : true
    },
    title : {
        type: String,
        required : true
    },
    author: {
        type: String,
        required : true
    },
    date_released : {
        type: String
    },
    content: {
        type: String
    },
    tags: {
        type: [String],
        enum: ['Web Development', 'Non-Tech', 'Tech Development', 'Science', 'AI', 'Cybersecurity', 'Software Development']
    }
})

module.exports = mongoose.model('Articles', blogArticleSchema)