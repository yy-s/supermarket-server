const mongoose = require('mongoose')

let User = new mongoose.Schema({
	admin: String,
	pwd: String,
	realName: String,
	type: Number
})

let Commodity = new mongoose.Schema({
	CName: String,
	id: Number,
	type: String,
	JPrice: Number,
	SPrice: Number,
	supplier: String,
	count: Number
})

module.exports = {
	User,
	Commodity
}
