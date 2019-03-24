const _ = require('lodash')
const db = require('../orm/datasource')

module.exports = {
		addCommodity,
		fetchCommodity,
		editCommodity,
		delCommodity,
		addSupplier,
		fetchSupplier,
		editSupplier,
		delSupplier,
		addOrder,
		fetchOrder
}

async function addCommodity(params) {
		let info = await db.createData('Commodity', params)
		return !!info['_id']
}
async function fetchCommodity(start, stop, search) {
		let result = {}
		let info = await db.retrieveData('Commodity')
		if (search) {
				info = _.filter(info, (s) => {
						return s.CName.toString().indexOf(search) >= 0
				})
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

async function addSupplier(params) {
		let info = await db.createData('Supplier', params)
		return !!info['_id']
}
async function fetchSupplier(start, stop, search) {
		let result = {}
		let info = await db.retrieveData('Supplier')
		if (search) {
				info = _.filter(info, (s) => {
						return s.SName.toString().indexOf(search) >= 0
				})
		}
		result.count = _.size(info)
		result.info = _.slice(info, start, stop)
		_.each(result.info, (single, i) => {
				single.number = start * stop + i + 1
		})
		return result
}
async function editSupplier(whereStr, updateStr) {
		let result = await db.updateData('Supplier', whereStr, updateStr)
		return !!result.ok
}
async function delSupplier(whereStr) {
		let result = await db.deleteData('Supplier', whereStr)
		return !!result
}

async function addOrder(params) {
		let info = await db.createData('Order', params)
		return !!info['_id']
}
async function fetchOrder(start, stop, search) {
		let result = {}
		let info = await db.retrieveData('Order')
		if (search) {
				info = _.filter(info, (s) => {
						return s.SName.toString().indexOf(search) >= 0
				})
		}
		result.count = _.size(info)
		result.info = _.slice(info, start, stop)
		_.each(result.info, (single, i) => {
				single.number = start * stop + i + 1
		})
		return result
}
