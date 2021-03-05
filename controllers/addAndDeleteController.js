const { Router } = require('express');
const createCourse = require('../services/createCourse');
const deleteCourse = require('../services/deleteCourse');
const check = require('../middleware/checkAuth');
const validator = require('validator');
const router = Router();

router.get('/:id', check.ifLoged, (req, res) => {
    console.log(req.params.id);
    deleteCourse(req.params.id)
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err.message))
})
router.get('/', check.ifLoged, async (req, res) => {
    let user = await req.user;
    res.render('create-course', {
        authenticated: req.isAuthenticated(),
        id: user?._id,
        name: user?.username
    })
});
router.post('/', async (req, res) => {
    try {
        if (validator.isURL(req.body.imgUrl, { protocols: ['http', 'https'] })) {           
            let user = await req.user;
            req.body.creator = user;
            createCourse(req.body, user);           
            res.redirect('/');
        } else {
            res.redirect('create-course', { messages: { error: 'Invalid inputs' } });
        }
    } catch (err) {
        console.log(err.message)
    }
});

module.exports = router;