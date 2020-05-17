const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUserByUserName) {
    const authenticate = (username, password, done) => {
        const user = getUserByUserName(username);
        if (user == null) {
            return done(null, false, { message: 'No user with that username.' });
        }

        try {
            if (await bcrypt.compare(password, user.password)) {
                done(null, user);
            } else {
                return done(null, false, { message: 'Wrong password.' });
            }

        } catch (error) {
            done(error)
        }
    };
    passport.use(new LocalStrategy({ usernameField: 'username', }), authenticate);
    passport.serialize((user, done) => {

    });
    passport.deserialize((id, done) => {

    });
}

module.exports(initialize())