const Role = require('../models').Role;

module.exports = {
	getAll(req, res) {
		return Role
			.findAll()
			.then((roles) => res.status(200).send(roles))
			.catch((error) => { res.status(400).send(error); });
	}
};