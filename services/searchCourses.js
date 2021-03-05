const Course = require('../models/Courses');

function search(query) {

    let searchName = query.search;
    // let from = Number(query.from);
    // let to = Number(query.to);
    let courses;
    if (searchName) {
        let regex = new RegExp(searchName, 'i');
        courses = Course
            .find({ title: { "$regex": regex } })
            .lean();
    }
    // if (from) {
    //     cubesArr = Cube
    //         .find({ difficultyLevel: { $gt: from } })
    //         .lean();
    // }
    // if (to) {
    //     cubesArr = Cube
    //         .find({ difficultyLevel: { $lt: to } })
    //         .lean();
    // }
    // console.log(courses);
    return courses;
}
module.exports = search;