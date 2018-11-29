'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		// Order belongsTo Customer
		return queryInterface.addColumn(
			'Services', // name of Source model
			'UserId', // name of the key we're adding 
			{
				type: Sequelize.UUID,
				references: {
					model: 'Users', // name of Target model
					key: 'Id', // key in Target model that we're referencing
				}
			}
		);
	},

	down: (queryInterface, Sequelize) => {
		// remove Order belongsTo Customer
		return queryInterface.removeColumn(
			'Services', // name of Source model
			'UserId' // key we want to remove
		);
	}
};
