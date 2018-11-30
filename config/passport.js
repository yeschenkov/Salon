const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const db = require("../models");

passport.use(new LocalStrategy({
	usernameField: 'phone'
},
	function (phone, password, done) {
		db.User.findOne({
			where: {
				Phone: phone
			},
			include: [
				{ model: db.Role}
			],
		}).then(function (dbUser) {
			// If there's no user with the given email
			if (!dbUser) {
				return done(null, false, {
					message: "User not found."
				});
			}
			// If there is a user with the given email, but the password the user gives us is incorrect
			else if (!dbUser.validPassword(password)) {
				return done(null, false, {
					message: "Incorrect password."
				});
			}
			// If none of the above, return the user
			return done(null, dbUser);
		});
	}
));

passport.serializeUser(function(user, cb) {
	cb(null, user);
 });
 //
 passport.deserializeUser(function(obj, cb) {
	cb(null, obj);
 });
 //
 // Exporting our configured passport
 module.exports = passport;
