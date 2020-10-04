const { DataTypes } = require('sequelize');
const { sequelize } = require('../../base/mysql');
let userFishTransactionModel;

const initUserFishTransactionModel = async () => {
	try {
		if (userFishTransactionModel) return userFishTransactionModel;
		userFishTransactionModel = sequelize.define('user_fish_transaction', {
			user_fish_transaction_id: {
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

module.exports = { initUserFishTransactionModel };