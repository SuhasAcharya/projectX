var { DataTypes} = require('sequelize');
var { sequelize } = require('../../base/mysql');
let userModel;

// module.exports = User;

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
				type: Sequelize.STRING(100),
				allowNull: false
			}
		}, {
			freezeTableName : true
		});

		await userModel.sync({
			alter: true
		});
		return userModel;
	} catch (e) {
	}
}

module.exports = { initUserModel };