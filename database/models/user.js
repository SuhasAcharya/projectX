const { DataTypes } = require('sequelize');
const { sequelize } = require('../../base/mysql');
let userModel;

const initUserModel = async () => {
	try {
		if (userModel) return userModel;
		userModel = sequelize.define('user', {
			user_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true
			},
			user_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
				defaultValue: ''
			},
			google_id: {
				type: DataTypes.STRING(100),
				allowNull: false,
				defaultValue: ''
			}
		}, {
			freezeTableName : true
		});

		await userModel.sync({
			alter: true
		});
		return userModel;
	} catch (e) {
		console.log(e);
	}
}

module.exports = { initUserModel };