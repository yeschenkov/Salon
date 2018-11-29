'use strict';
module.exports = (sequelize, DataTypes) => {
	const Service = sequelize.define('Service', {
		Id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Duration: {
			type: DataTypes.INTEGER,
			allowNull: false,
		}
	}, {});
	Service.associate = function (models) {
		// associations can be defined here
		Service.belongsTo(models.User, { foreignKey: 'UserId' });
	};
	return Service;
};