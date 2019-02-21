const _ = require('lodash')
const db = require('../orm/datasource')

module.exports = {
	addCommodity,
	fetchCommodity,
	editCommodity,
	delCommodity
}

async function addCommodity(params) {
	let info = await db.createData('Commodity', params)
	return !!info['_id']
}

async function fetchCommodity(start, stop, search) {
	let result = {}
	let info
	if (search) {
		info = await db.retrieveData('Commodity', {'CName': search})
	} else {
		info = await db.retrieveData('Commodity')
	}
	result.count = _.size(info)
	result.info = _.slice(info, start, stop)
	_.each(result.info, (single, i) => {
		single.number = start * stop + i + 1
	})
	return result
}

async function editCommodity(whereStr, updateStr) {
	let result = await db.updateData('Commodity', whereStr, updateStr)
	return !!result.ok
}

async function delCommodity(whereStr) {
	let result = await db.deleteData('Commodity', whereStr)
	return !!result
}
