'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		// Order belongsTo Customer
		return queryInterface.addColumn(
			'Users', // name of Source model
			'RoleId', // name of the key we're adding 
			{
				type: Sequelize.UUID,
				references: {
					model: 'Roles', // name of Target model
					key: 'Id', // key in Target model that we're referencing
				}
			}
		);
	},

	down: (queryInterface, Sequelize) => {
		// remove Order belongsTo Customer
		return queryInterface.removeColumn(
			'Users', // name of Source model
			'RoleId' // key we want to remove
		);
	}
};
