var router = require('express').Router()
var requireDir = require('require-dir')
var ctrls = requireDir('../../ctrls')

router.post('/login', ctrls.login.login)
router.post('/reg', ctrls.login.registered)

module.exports = router
