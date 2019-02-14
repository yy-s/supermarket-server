const _ = require('lodash')
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/supermarket';

module.exports = {
	createData,
	updateData,
	retrieveData,
	deleteData
}

// MongoClient.connect(url, function (err, db) {
// 	if (err) throw err;
// 	console.log('数据库已创建');
// 	var dbase = db.db("runoob");
// 	dbase.createCollection('site', function (err, res) {
// 		if (err) throw err;
// 		console.log("创建集合!");
// 		db.close();
// 	});
// });

function createData(col, data) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		var dbo = db.db("supermarket")
		dbo.collection("col").insertOne(data, function(err, res) {
			if (err) throw err
			console.log("数据插入成功")
			db.close()
		})
	})
}

function updateData(col, whereStr, updateStr) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		var dbo = db.db("supermarket")
		dbo.collection("col").updateOne(whereStr, updateStr, function(err, res) {
			if (err) throw err
			console.log("数据更新成功")
			db.close()
		})
	})
}

function retrieveData(col, whereStr) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		var dbo = db.db("supermarket")
		dbo.collection("col").find(whereStr).toArray(function(err, result) {
			if (err) throw err
			console.log(result)
			db.close()
		})
	})
}

function deleteData(col, whereStr) {
	MongoClient.connect(url, function(err, db) {
		if (err) throw err
		var dbo = db.db("supermarket")
		dbo.collection("col").deleteOne(whereStr, function(err, obj) {
			if (err) throw err
			console.log("数据删除成功")
			db.close()
		})
	})
}
