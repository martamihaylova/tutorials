const Users = require('../models/Users');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../config/config');

function register(name, password, req, res) {
    Users.find({})
        .then((data) => {
            let foundName = data.find((x) => x?.username.toLowerCase() === name.toLowerCase());
            if (foundName) res.render('register', { messages: { error: 'Username allready exists.Please try again.' }, title: 'Register' });
        });

    bcrypt.hash(password, SALT_ROUNDS)
        .then((hashedPassword) => {
            let user = new Users({
                username: name,
                password: hashedPassword,
            });
            user.save()
            .then(() => {
                console.log(user);
                res.locals.user = user;
                req.login(user, function (err) {
                    if (err) { return next(err); }
                    return res.redirect('/');
                });
            })
            .catch((error) =>{
                console.log('hello');
                return res.render('register', { messages: { error: error.message }, title: 'Register' });
            });
        })
        .catch((err) => {
            console.log(err.message);
            res.render('register', { messages: { error: 'Unsuccessful reristration.Please try again.' }, title: 'Register' });
        });

}
module.exports = register;