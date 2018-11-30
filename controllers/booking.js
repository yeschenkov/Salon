const Booking = require('../models').Booking;
const Service = require('../models').Service;
module.exports = {
	getAll(req, res) {
		if (!req.payload.id) {
			res.status(401).json({
				"message": "UnauthorizedError: private profile"
			});
		} else {
			const filter = {};
			if (!req.payload.roleName) {
				filter.where = { UserId: req.payload.id };
			} else if (req.payload.roleName === 'Master') {
				filter.include = [{
					model: Service,
					where: { UserId: req.payload.id },
					required: true
				}];
			}
			return Booking
				.findAll()
				.then((bookings) => res.status(200).send(bookings))
				.catch((error) => { res.status(400).send(error); });
		}
	},

	getById(req, res) {
		return Booking
			.findById(req.params.id)
			.then((booking) => {
				if (!booking) {
					return res.status(404).send({
						message: 'Booking Not Found',
					});
				}
				return res.status(200).send(booking);
			})
			.catch((error) => res.status(400).send(error));
	},

	update(req, res) {
		return Booking
			.findById(req.params.id)
			.then(booking => {
				if (!booking) {
					return res.status(404).send({
						message: 'Service Not Found',
					});
				}
				return booking
					.update({
						ServiceId: req.body.ServiceId || booking.ServiceId,
						DateFrom: req.body.DateFrom || booking.DateFrom,
						DateTo: req.body.DateTo || booking.DateTo,
						UserId: req.body.UserId || booking.UserId
					})
					.then((booking) => res.status(200).send(booking))
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},

	create(req, res) {
		return Booking
			.create({
				ServiceId: req.body.ServiceId || booking.ServiceId,
				DateFrom: req.body.DateFrom || booking.DateFrom,
				DateTo: req.body.DateTo || booking.DateTo,
				UserId: req.body.UserId || booking.UserId
			})
			.then((booking) => res.status(201).send(booking))
			.catch((error) => res.status(400).send(error));
	},

	delete(req, res) {
		return Booking
			.findById(req.params.id)
			.then(booking => {
				if (!booking) {
					return res.status(400).send({
						message: 'Booking Not Found',
					});
				}
				return booking
					.destroy()
					.then(() => res.status(204).send())
					.catch((error) => res.status(400).send(error));
			})
			.catch((error) => res.status(400).send(error));
	},
};