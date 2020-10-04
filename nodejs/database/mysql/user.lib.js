const { initUserModel } = require('../models/user');
// const sequelize = require('sequelize');

let userLib = {};

userLib.createUser = async (data) => {
	try {
		const userModel = await initUserModel();
		return await userModel.create(data);
		
	} catch (e) {
		console.log(e)
	}
}

userLib.getUserDetails = async (filteredBy) => {
	try {
		const userModel = await initUserModel();
		return await userModel.findOne({where: filteredBy, raw: true, nest: true});
	} catch (e) {
		console.log(e);
	}
}

userLib.getUserList = async () => {
	const userModel = await initUserModel();
	return await userModel.findAll({where: filteredBy, raw: true, nest: true});
}

module.exports = userLib;