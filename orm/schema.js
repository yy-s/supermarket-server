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
		HeZuoFang: String,
		PurchaseID: Number,
		LRDate: Date,
		CXQ: String,
		type: Number
})
// 订单
let Order = new mongoose.Schema({
		orderName: String,
		orderID: String,
		price: String,
		SHPerson: String,
		LRPerson: String,
		purchaseID: String,
		date: Date
})
// 供应商
let Supplier = new mongoose.Schema({
		SName: String,
		address: String,
		tel: String,
		comm: String,
		startDate: Date,
		status: String
})

module.exports = {
		User,
		Commodity,
		Purchase,
		Contract,
		Order,
		Supplier
}
