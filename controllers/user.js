const User = require('../models').User;

module.exports = {
	getAll(req, res) {
		return User
			.findAll()
			.then((users) => res.status(200).send(users))
			.catch((error) => { res.status(400).send(error); });
	},

	getById(req, res) {
		return User
			.findById(req.params.id)
			.then((user) => {
				if (!user) {
					return res.status(404).send({
						message: 'User Not Found',
					});
				}
				return res.status(200).send(user);
			})
			.catch((error) => res.status(400).send(error));
	},

	update(req, res) {
		return User
			.findById(req.params.id)
			.then(user => {
				if (!user) {
					return res.status(404).send({
						message: 'User Not Found',
					});
				}
				return user
					.update({
						Name: req.body.Name || user.Name,
						Phone: req.body.Phone || user.Phone,
						RoleId: req.body.RoleId || user.RoleId,
						Password: req.body.Password || user.Password,
					})
					.then(() => res.status(200).send(user))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},
};