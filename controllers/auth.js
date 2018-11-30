const passport = require('passport');
const jwt = require('jsonwebtoken');
var db = require("../models");

module.exports.register = function (req, res) {
	const user = {};
	user.Name = req.body.name;
	user.Phone = req.body.phone;
	user.Password = req.body.password;

	db.User.create(user).then(function () {
		res.status(200);
		res.json({message: "ok"});
	}).catch(function (err) {
		console.log(err);
		res.json(err);
		// res.status(422).json(err.errors[0].message);
	});
};

module.exports.login = function (req, res) {

	passport.authenticate('local', function (err, user, info) {
		var token;

		// If Passport throws/catches an error
		if (err) {
			res.status(404).json(err);
			return;
		}

		// If a user is found
		if (user) {
			token = generateJwt(user);
			res.status(200);
			res.json({
				"token": token
			});
		} else {
			// If user is not found
			res.status(401).json(info);
		}
	})(req, res);

};


function generateJwt(user) {
	const payload = {
		phone: user.Phone,
		id: user.Id,
		name: user.Name,
		time: new Date()
	};
	if (user.Role) {
		payload.roleName = user.Role.Name;
	} else {
		payload.roleName = null;
	}
	var token = jwt.sign(payload, 'MY_SECRET', {
		expiresIn: 3600 * 24 * 7
	});
	return token;
}