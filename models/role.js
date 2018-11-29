'use strict';
module.exports = (sequelize, DataTypes) => {
	const Role = sequelize.define('Role', {
		Id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			allowNull: false
		},
		Name: {
			type: DataTypes.STRING,
			allowNull: false
		}
	}, {});
	Role.associate = function (models) {
		// associations can be defined here
	};
	return Role;
};