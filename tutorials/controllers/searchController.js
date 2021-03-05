const { Router } = require('express');
const coursesSearch = require('../services/searchCourses')
const check = require('../middleware/checkAuth');
const router = Router();

router.get('/', check.ifLoged, async (req, res) => {
    let user = await req.user;
    coursesSearch(req.query)
        .then((courses) => {
            res.render('user-home', {
                authenticated: req.isAuthenticated(),
                id: user?._id,
                name: user?.username,
                courses
            })
        })
        .catch((err) => console.log(err.messagr));
});
module.exports = router;