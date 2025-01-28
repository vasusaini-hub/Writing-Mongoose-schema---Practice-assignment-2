const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    message: {
        type: String,
        required: true,
        trim: true
    },
    commentedAt: {
        type: Date,
        default: Date.now
    }
});

const BlogPostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        trim: true
    },
    content: {
        type: String,
        required: true,
        minlength: 50,
        trim: true
    },
    author: {
        type: String,
        required: true,
        trim: true
    },
    tags: {
        type: [String],
        default: []
    },
    category: {
        type: String,
        default: "General",
        trim: true
    },
    likes: {
        type: [String],
        default: []
    },
    comments: {
        type: [CommentSchema],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date
    }
}, {
    timestamps: true 
});

module.exports = mongoose.model('BlogPost', BlogPostSchema);