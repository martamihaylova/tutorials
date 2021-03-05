const mongoose = require('mongoose');
const { schema } = require('./Courses');
const validator = require('validator');

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        minlength: [2, 'Username must be at least 2 characters.'],
        maxlength: [20, 'Username must be less than 20 characters.'],
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        minlength: [5, 'Username must be at least 2 characters.'],
        maxlength: [20, 'Username must be less than 20 characters.'],
        required: true
    },
    enrolledCourses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Courses'
    }],
    created: [{
        type: mongoose.Types.ObjectId,
        ref: 'Courses'
    }],
});

module.exports = mongoose.model('Users', userSchema);