const { DataTypes } = require('sequelize');
const { sequelize } = require('../../base/mysql');
let masterFishModel;

const initMasterFishModel = async () => {
	try {
		if (masterFishModel) return masterFishModel;
		masterFishModel = sequelize.define('master_fish', {
			master_fish_id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				allowNull: false,
				primaryKey: true
			},
			fish_name: {
				type: DataTypes.STRING(100),
				allowNull: false,
				defaultValue: ''
			},
			price: {
				type: DataTypes.STRING(100),
				allowNull: false,
				defaultValue: ''
            },
      url: {
				type: DataTypes.STRING(100),
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

		await masterFishModel.sync({
			alter: true
		});
		return masterFishModel;
	} catch (e) {
		console.log(e);
	}
}

module.exports = { initMasterFishModel };