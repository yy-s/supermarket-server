const test = require('../model/test')

exports.demo = async function (req, res) {
	let result = test.makeExcel()
	res.status(200).json(result)
}
