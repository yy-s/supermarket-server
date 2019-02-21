var router = require('express').Router()
var requireDir = require('require-dir')
var ctrls = requireDir('../../ctrls')

router.post('/login', ctrls.login.checkUser)
router.post('/reg', ctrls.login.registered)
router.post('/addCom', ctrls.supermarket.addCommodity)
router.post('/getCom', ctrls.supermarket.fetchCommodity)
router.post('/editCom', ctrls.supermarket.editCommodity)
router.post('/delCom', ctrls.supermarket.delCommodity)

module.exports = router
