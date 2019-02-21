const _ = require('lodash')
const superMarket = require('../model/supermarket')

exports.addCommodity = async function (req, res) {
	try {
		let result = await superMarket.addCommodity(req.body)
		if (!result) {
			res.status(200).json({
				'code': 3,
				'data': '添加商品信息失败'
			})
		}
		res.status(200).json({
			'code': 0,
			'data': result
		})
	} catch (e) {
		console.log('addCommodity', e)
		res.status(500).json(e)
	}
}

exports.fetchCommodity = async function (req, res) {
	let {page, pageSize, search} = req.body
	try {
		let start = (page - 1) * pageSize
		let stop = page * pageSize
		let result = await superMarket.fetchCommodity(start, stop, search)
		if (!result || _.size(result) === 0) {
			res.status(200).json({
				'code': 3,
				'data': '暂无数据'
			})
		}
		res.status(200).json({
			'code': 0,
			'data': result
		})
	} catch (e) {
		console.log('fetchCommodity', e)
		res.status(500).json(e)
	}
}

exports.editCommodity = async function (req, res) {
	let {whereStr, updateStr} = req.body
	try {
		let result = await superMarket.editCommodity(whereStr, updateStr)
		res.status(200).json({
			'code': 0,
			'data': result
		})
	} catch (e) {
		console.log('editCommodity', e)
		res.status(500).json(e)
	}
}

exports.delCommodity = async function (req, res) {
	let {whereStr} = req.body
	try {
		let result = await superMarket.delCommodity(whereStr)
		res.status(200).json({
			'code': 0,
			'data': result
		})
	} catch (e) {
		console.log('delCommodity', e)
		res.status(500).json(e)
	}
}
