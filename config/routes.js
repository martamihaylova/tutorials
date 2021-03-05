const userController = require('../controllers/userController.js');
const homeController = require('../controllers/homeController.js');
const detailsController = require('../controllers/detailsController.js');
const editController = require('../controllers/editController.js');
const enrollingController = require('../controllers/enrollingController.js');
const searchController = require('../controllers/searchController.js');
// const profileController = require('../controllers/profileController.js');
const addAndDeleteController = require('../controllers/addAndDeleteController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    app.use('/create', addAndDeleteController);
    app.use('/details', detailsController);
    app.use('/delete', addAndDeleteController);
    app.use('/edit', editController);
    app.use('/enroll', enrollingController);
    // app.use('/profile', profileController);
    app.use('/search', searchController);
    app.use('/', homeController);
    app.get('*', (req, res) => {
        res.send('404');
    });
};