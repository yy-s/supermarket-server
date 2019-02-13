var rootRouter = require('express').Router()

rootRouter.use('', require('./router'))

module.exports = function vRouter(app) {
	app.use('/api/v1', rootRouter)
}
