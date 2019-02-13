const _ = require('lodash')
const env = process.env.NODE_ENV || 'development'
const config = require(`./${env}.js`)
let tokenKey =  new Buffer("462fd506cf7c463caa4bdfa94fad5ea3", "base64")
const base = {
	secret: tokenKey,
	alg: "HS512"
}

module.exports = _.assign({}, base, config)


