'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
		Id: {
			type: Sequelize.UUID,
			defaultValue: Sequelize.UUIDV1,
			primaryKey: true,
			allowNull: false
		},
		Name: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		Phone: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};