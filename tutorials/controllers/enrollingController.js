const { Router } = require('express');
const courseDetails = require('../services/getDetails');
const edit = require('../services/editCourse')
const check = require('../middleware/checkAuth');
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {
    try {
        let user = await req.user;
        let currentCourse = await courseDetails(req.params.id);
        user.enrolledCourses.push(currentCourse);
        currentCourse.usersEnrolled.push(user);
        user.save();
        edit(req.params.id, currentCourse)
            .then(() => res.redirect(`/details/${req.params.id}`))
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;