const Course = require('../models/Courses');

function editCourse(courseId, data) {
    
    return Course.updateOne({ _id: courseId }, data);
}

module.exports = editCourse;