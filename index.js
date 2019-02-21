const _ = require('lodash')
const path = require('path')
const http = require('http')
const express = require('express')
const engines = require('consolidate')
const bodyParser = require('body-parser')
const onFinished = require('on-finished')
const cookieParser = require('cookie-parser')
const expressValidator = require('express-validator')
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27017/supermarket"
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/supermarket')
const schema = require('./orm/schema')

// 连接数据库
var db = mongoose.connection
db.on('error',console.error.bind(console,'连接错误:'));
db.once('open',function() {
	//一次打开记录
})

const HTTP_PORT = process.env.HTTP_PORT || 5000

const app = express();

app.use(require('morgan')('dev'))
app.use(cookieParser())
app.use(bodyParser.json({limit: '500mb'}))
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }))
app.use(expressValidator())
app.engine('html', engines.swig)
app.engine('jade', engines.jade)
app.set('view engine', 'html')
app.set('views', path.join(__dirname, '../..', 'server/views'))
app.use(require('compression')());
app.use(express.static(path.join(__dirname, '../..', 'public'), {maxAge: '7d'}))
app.use(require('response-time')())

app.use(function (req, res, next) {
	onFinished(res, function (err) {
		console.log(`[%s] finished request.`, req.connection.remoteAddress);
	})
	next()
})

// MongoClient.connect(url, function(err, db) {
// 	if (err) throw err;
// 	console.log("数据库连接成功!");
// 	db.close();
// });
//
// let base = ['@User', '@Supplier']
// _.each(base, (col) => {
// 	MongoClient.connect(url, function (err, db) {
// 		if (err) throw err
// 		var dbase = db.db("supermarket")
// 		dbase.createCollection(col, function (err, res) {
// 			if (err) throw err
// 			console.log(col + "创建成功!")
// 			db.close()
// 		})
// 	})
// })

require('./routes/v1')(app)

app.use(function(req, res, next) {
	var err = new Error('Not Found')
	err.status = 404;
	next(err)
})

app.use(function (err, req, res, next) {
	var code = err.status || 500
	switch (err.name) {
		case 'HttpStatusError':
			if(code == 401 && err.message && (err.message.errorCode == 1 || err.message.errorCode == 2)) {
				console.log('成功返回错误信息')
				return res.status(200).json(err.message)
			}
			if(code == 400) {
				console.log('400 重定向, error = ', err.message)
				return res.redirect('/login');
			}
			if(code == 401 && err.message && err.message.errorCode == 3) {
				console.log('401 重定向, error = ', err.message)
				return res.redirect('/login')
			}
			break
		default:
			break
	}
	if(code >= 500) {
		console.log('服务端Error', err)
	}
	return res.status(code).json(err)
})

http.createServer(app).listen(HTTP_PORT, function () {
	console.log(`HTTP Server listening on port: %s, in %s mode`, HTTP_PORT, app.get('env'))
})
