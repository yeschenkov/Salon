const Service = require('../models').Service;
const User = require('../models').User;
const Role = require('../models').Role;

module.exports = {
	getAll(req, res) {
		return Service
			.findAll()
			.then((services) => res.status(200).send(services))
			.catch((error) => { res.status(400).send(error); });
	},

	getById(req, res) {
		return Service
			.findById(req.params.id)
			.then((service) => {
				if (!service) {
					return res.status(404).send({
						message: 'Service Not Found',
					});
				}
				return res.status(200).send(service);
			})
			.catch((error) => res.status(400).send(error));
	},

	update(req, res) {
		return Service
			.findById(req.params.id)
			.then(service => {
				if (!service) {
					return res.status(404).send({
						message: 'Service Not Found',
					});
				}
				return service
					.update({
						UserId: req.body.UserId || service.UserId,
						Duration: req.body.Duration || service.Duration,
						Name: req.body.Name || service.Name
					})
					.then((service) => res.status(200).send(service))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},

	create(req, res) {
		return Service
			.create({
				UserId: req.body.UserId,
				Duration: req.body.Duration,
				Name: req.body.Name
			})
			.then((service) => {
				Role.find({ where: { Name: 'Master' } }).then(role => {
					User.findById(service.UserId).then(user => {
						user.update({ RoleId: role.id});
					});
				});
				return service;
			})
			.then((service) => res.status(201).send(service))
			.catch((error) => res.status(400).send(error));
	},

	delete(req, res) {
		return Service
			.findById(req.params.id)
			.then(service => {
				if (!service) {
					return res.status(400).send({
						message: 'Service Not Found',
					});
				}
				return service
					.destroy()
					.then(() => res.status(204).send())
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},
};