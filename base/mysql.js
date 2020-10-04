var config = require('../config');
var Sequelize = require('sequelize');

var sequelize = new Sequelize(
	config.mysql.database,
	config.mysql.username,
	config.mysql.password, {
		host: config.mysql.host,
		dialect: 'mysql',
		pool: {
			max: 5,
			min: 0,
			idle: 10000
		},
		logging: false,
		define: {
			timeStamps: false
		}
	}
);

module.exports = sequelize;