var path = require('path');

var config = {
	debug: true,
	port: 3306,
	mysql: {
		host: '127.0.0.1',
		username: 'root',
		password: 'password',
		database: 'something_fishy'
	}
}

module.exports = config