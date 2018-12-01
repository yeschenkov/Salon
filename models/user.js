'use strict';
var bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define('User', {
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
		Phone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		Password: {
			type: DataTypes.STRING,
			allowNull: false,
		}
	}, {});
	User.associate = function (models) {
		// associations can be defined here
		User.belongsTo(models.Role, { foreignKey: 'RoleId' });
	};

	User.prototype.validPassword = function (password) {
		return bcrypt.compareSync(password, this.Password);
	};
	// Hooks are automatic methods that run during various phases of the User Model lifecycle
	// In this case, before a User is created, we will automatically hash their password
	User.hook("beforeCreate", function (user) {
		user.Password = bcrypt.hashSync(user.Password, bcrypt.genSaltSync(10), null);
	});
	
	return User;
};