'use strict';
module.exports = (sequelize, DataTypes) => {
	const Booking = sequelize.define('Booking', {
		Id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV1,
			primaryKey: true,
			allowNull: false
		},
		DateFrom: {
			type: DataTypes.DATE
		},
		DateTo: {
			type: DataTypes.DATE
		}
	}, {});
	Booking.associate = function (models) {
		// associations can be defined here
		Booking.belongsTo(models.Service, { foreignKey: 'ServiceId' });
		Booking.belongsTo(models.User, { foreignKey: 'UserId' });
	};
	return Booking;
};