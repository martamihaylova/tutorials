const { Router } = require('express');
const Courses = require('../models/Courses');
const router = Router();

router.get('/', async (req, res) => {
    try {
        let user = await req.user;
        let courses = await Courses.find().sort({ createdAt: - 1 }).lean();
        if (user === null) {
            console.log('null');
            res.redirect('/');
        }
        if (!user) {
            courses.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length);
            res.render('guest-home', { authenticated: req.isAuthenticated(), courses });
        } else {
            res.render('user-home', {
                authenticated: req.isAuthenticated(),
                id: user?._id,
                name: user?.username,
                courses
            })
        }
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;