const Course = require('../models/Courses');

function createNewCourse(data, user) {
    let course = new Course(data);
    course.save();
    user.created.push(course);
    user.save();
    return course;
}

module.exports = createNewCourse;