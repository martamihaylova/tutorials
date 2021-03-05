const Course = require('../models/Courses');

function getDetails(id) {

    return Course.findById(id).lean();

}

module.exports = getDetails;