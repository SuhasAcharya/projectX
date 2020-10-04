const { initUserModel } = require('../models/user');
const sequelize = require('sequelize');

let userLib = {};

userLib.createUser = async (data) => {
	try {
		const userModel = await initUserModel();
		return await userModel.create({ name: "Jane" });
		
	} catch (e) {
		console.log(e)
	}
}

userLib.getUserDetail = async (filteredBy) => {
	const userModel = initUserModel();
	return await userModel.findOne(filteredBy);
}

userLib.getUserList = async () => {
	const userModel = initUserModel();
	return await userModel.findAll(filteredBy);
}

userLib.createNewUser = async (data) => {
	const userModel = initUserModel();
	let sql = `INSERT INTO user (user_id, user_name)
	VALUES (0, ${data.user_name})`;
	return await sequelize.query(sql);
}
module.exports = userLib;