const _ = require('lodash')
const login = require('../model/login')

exports.checkUser = async function(req, res) {
	let {admin, pwd} = req.body
	try {
		let result = await login.fetchUserInfo(admin, pwd)
		if (!result || _.size(result) === 0) {
			res.status(200).json({
				'code': 3,
				'data': '用户不存在'
			})
		}
		if (_.size(result) > 0 && result[0].pwd !== pwd) {
			res.status(200).json({
				'code': 4,
				'data': '密码不正确'
			})
		}
		let data = {
			'code': 0,
			'data': _.pick(result[0], ['admin', 'pwd', 'type', 'realName'])
			
		}
		res.status(200).json(data)
	} catch (e) {
		console.log('fecthUserInfo, error' + e)
		res.status(500).json(e)
	}
}

exports.registered = async function(req, res) {
	let {admin, pwd, realName, type} = req.body
	try {
		let result = await login.addUserInfo(admin, pwd, realName, type)
		res.status(200).json({
			'code': 0,
			'data': result
		})
	} catch (e) {
		console.log('注册用户信息失败！')
		res.status(500).json(e)
	}
}
