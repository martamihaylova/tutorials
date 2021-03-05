const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({

    title: {
        type: String,
        unique: true,
        required: true
    },
    description: {
        type: String,
        maxlength: 50,
        required: true
    },
    imgUrl: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true,
    },
    createdAt: {
        type: String,
        default: function () {
            let date = new Date();
            return date.toString().slice(0, 24);
        } ,
        required: true
    },
    usersEnrolled: [{
        type: mongoose.Types.ObjectId,
        ref: 'Users'
    }],
    creator: {
        type: mongoose.Types.ObjectId,
        required: true
    },
});


module.exports = mongoose.model('Courses', courseSchema);