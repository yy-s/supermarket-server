const mongoose = require('mongoose')

// 用户
let User = new mongoose.Schema({
		admin: String,
		pwd: String,
		realName: String,
		type: Number
})
// 商品
let Commodity = new mongoose.Schema({
		CName: String,
		id: Number,
		type: String,
		JPrice: Number,
		SPrice: Number,
		supplier: String,
		count: Number
})
// 采购记录
let Purchase = new mongoose.Schema({
		orderName: String,
		orderID: Number,
		CGDate: Date,
		LRDate: Date,
		CDPerson: String,
		SHPerson: String,
		LRPerson: String
})
// 合同
let Contract = new mongoose.Schema({
		CID: Number,
		QDDate: Date,
		LRDate: Date,
		CXQ: String
})
let Order = new mongoose.Schema({

})

module.exports = {
		User,
		Commodity,
		Purchase,
		Contract
}
