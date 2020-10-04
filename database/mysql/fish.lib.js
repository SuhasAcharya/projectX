const { initMasterFishModel } = require('../models/masterFish');
const { initUserFishCartModel } = require('../models/user_fish_cart');
const { initUserFishTransactionModel } = require('../models/user_fish_transaction');
// const sequelize = require('sequelize');

let fishLib = {};

fishLib.createMasterFish = async (data) => {
	try {
		const masterFishModel = await initMasterFishModel();
		return await masterFishModel.create(data);
		
	} catch (e) {
		console.log(e)
	}
}

fishLib.getMasterFishDetails = async (filteredBy) => {
	try {
		const masterFishModel = await initMasterFishModel();
		return await masterFishModel.findOne({where: filteredBy, raw: true, nest: true});
	} catch (e) {
		console.log(e);
	}
}

fishLib.getMasterFishList = async (filteredBy) => {
	const masterFishModel = await initMasterFishModel();
	return await masterFishModel.findAll({where: filteredBy, raw: true, nest: true});
}

fishLib.createUserFish = async (data) => {
	try {
		const userFishCartModel = await initUserFishCartModel();
		return await userFishCartModel.create(data);
		
	} catch (e) {
		console.log(e)
	}
}

fishLib.getUserFishDetails = async (filteredBy) => {
	try {
		const userFishCartModel = await initUserFishCartModel();
		return await userFishCartModel.findOne({where: filteredBy, raw: true, nest: true});
	} catch (e) {
		console.log(e);
	}
}

fishLib.getUserFishList = async () => {
	const userFishCartModel = await initUserFishCartModel();
	return await userFishCartModel.findAll({where: filteredBy, raw: true, nest: true});
}

fishLib.createUserFishTransaction = async (data) => {
	try {
		const userFishTransactionModel = await initUserFishTransactionModel();
		return await userFishTransactionModel.create(data);
		
	} catch (e) {
		console.log(e)
	}
}

fishLib.getUserFishTransactionDetails = async (filteredBy) => {
	try {
		const userFishTransactionModel = await initUserFishTransactionModel();
		return await userFishTransactionModel.findOne({where: filteredBy, raw: true, nest: true});
	} catch (e) {
		console.log(e);
	}
}

fishLib.getUserFishTransactionList = async () => {
	const userFishTransactionModel = await initUserFishTransactionModel();
	return await userFishTransactionModel.findAll({where: filteredBy, raw: true, nest: true});
}
module.exports = fishLib;