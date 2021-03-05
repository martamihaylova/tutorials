const { Router } = require('express');
const check = require('../middleware/checkAuth');
const courseDetails = require('../services/getDetails');
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {
    let user = await req.user;
    let currentCourse = await courseDetails(req.params.id);
    let creator = (currentCourse.creator + '') === (user._id + '');
    let alreadyEnrolled = user.enrolledCourses.includes(req.params.id);
    
    res.render('course-details', {
        authenticated: req.isAuthenticated(),
        id: user?._id,
        name: user?.username,
        currentCourse,
        creator,
        alreadyEnrolled
    })
});

module.exports = router;