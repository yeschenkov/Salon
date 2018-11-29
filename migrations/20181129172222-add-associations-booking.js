'use strict';


module.exports = {
	up: (queryInterface, Sequelize) => {

		return queryInterface.addColumn(
			'Bookings',
			'UserId',
			{
				type: Sequelize.UUID,
				references: {
					model: 'Users',
					key: 'Id',
				}
			}
		)
			.then(() => {
				return queryInterface.addColumn(
					'Bookings', // name of Target model
					'ServiceId', // name of the key we're adding
					{
						type: Sequelize.UUID,
						references: {
							model: 'Services', // name of Source model
							key: 'Id',
						}
					}
				);
			});
	},

	down: (queryInterface, Sequelize) => {
		// remove Order belongsTo Customer
		return queryInterface.removeColumn(
			'Bookings', // name of Source model
			'UserId' // key we want to remove
		)
			.then(() => {
				// remove Payment hasOne Order
				return queryInterface.removeColumn(
					'Bookings', // name of the Target model
					'ServiceId' // key we want to remove
				);
			});
	}
};