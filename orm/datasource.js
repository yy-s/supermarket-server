const _ = require('lodash')
const mongoose = require('mongoose')
const db = mongoose.connection
const schema = require('./schema')

module.exports = {
	createData,
	updateData,
	retrieveData,
	deleteData
}

async function createData(col, data) {
	let model = db.model(col, schema[col])
	let entity = new model(data)
	let result = entity['_doc']
	entity.save()
	return result
}

async function updateData(col, whereStr, updateStr) {
	let result
	let model = db.model(col, schema[col])
	result = await model.update(whereStr, updateStr)
	return result
}

async function retrieveData(col, whereStr) {
	let result = []
	let model = db.model(col, schema[col])
	let res = await model.find(whereStr)
	_.each(res, (single) => {
		result.push(single['_doc'])
	})
	return result
}

async function deleteData(col, whereStr) {
	let result
	let model = db.model(col, schema[col])
	result = await model.remove(whereStr)
	return result
}
