const _ = require('lodash')
const db = require('../orm/datasource')

module.exports = {
	fetchUserType,
	addUserInfo
}

async function fetchUserType(admin, pwd) {
	let whereStr = 'admin = ' + admin
	let userInfo = db.retrieveData('@User', whereStr)
	if (!userInfo) {
		return '该用户不存在'
	}
	if (userInfo && userInfo.pwd !== pwd) {
		return '密码有误'
	}
	let result = {
		'realName': userInfo.userName,
		'type': userInfo.type
	}
	return result
}

async function addUserInfo(admin, pwd, userName, type) {
	let userInfo = {
		'admin': admin,
		'pwd': pwd,
		'realName': userName,
		'type': type == '超市' ? 1 : 2
	}
	let result = db.createData('@User', userInfo)
	return result
}
