const _ = require('lodash')
const db = require('../orm/datasource')

module.exports = {
	fetchUserInfo,
	addUserInfo
}

async function fetchUserInfo(admin) {
	let userInfo
	let whereStr = {'admin': admin}
	userInfo = await db.retrieveData('User', whereStr)
	return userInfo
}

async function addUserInfo(admin, pwd, realName, type) {
	let result
	let userInfo = {
		'admin': admin,
		'pwd': pwd,
		'realName': realName,
		'type': type === '超市管理员' ? 1 : 2
	}
	result = await db.createData('User', userInfo)
	return result
}
