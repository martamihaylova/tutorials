const Course = require('../models/Courses');
const Users = require('../models/Users');

async function deleteCourse(id) {
    let course = await Course.findById(id, 'creator');
    let user = await Users.findById(course.creator);
    user.created.splice(user.created.indexOf(course._id), 1);
    user.save();
    course.deleteOne({ _id: id }, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });
}

module.exports = deleteCourse;