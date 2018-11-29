'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		// Order belongsTo Customer
		return queryInterface.addColumn(
			'Users', // name of Source model
			'Password', // name of the key we're adding 
			{
				type: Sequelize.STRING,
				allowNull: false
			}
		);
	},

	down: (queryInterface, Sequelize) => {
		// remove Order belongsTo Customer
		return queryInterface.removeColumn(
			'Users', // name of Source model
			'Password' // key we want to remove
		);
	}
};
