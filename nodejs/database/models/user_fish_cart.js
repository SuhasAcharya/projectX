const { DataTypes } = require('sequelize');
const { sequelize } = require('../../base/mysql');
let userFishCartModel;

const initUserFishCartModel = async () => {
	try {
		if (userFishCartModel) return userFishCartModel;
		userFishCartModel = sequelize.define('user_fish_cart', {
			user_fish_cart_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true
			},
			master_fish_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: ''
			},
			user_id: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: ''
			},
			price: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: ''
			},
			quantity: {
				type: DataTypes.INTEGER,
				allowNull: false,
				defaultValue: ''
      },
			status: {
				type: DataTypes.TINYINT(4),
				allowNull: false,
				defaultValue: 1
        }
		}, {
			freezeTableName : true
		});

		await userFishCartModel.sync({
			alter: true
		});
		return userFishCartModel;
	} catch (e) {
		console.log(e);
	}
}

module.exports = { initUserFishCartModel };