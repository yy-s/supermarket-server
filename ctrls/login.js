const _ = require('lodash')
const login = require('../model/login')

exports.login = async function (req, res) {
	let {admin, pwd} = req.body
	try {
		let userType = await login.fetchUserType(admin, pwd)
		let data = {
			'code': '0',
			'data': userType
		}
		res.status(200).json(data)
	} catch (e) {
		console.log('fecthUserInfo, error' + e)
		res.status(500).json(e)
	}
}

exports.registered = async function (req, res) {
	let {admin, pwd, userName, type} = req.body
	try {
		let result = await login.addUserInfo(admin, pwd, userName, type)
		res.status(200).json({
			'code': 0,
			'data': result
		})
	} catch (e) {
	
	}
}
