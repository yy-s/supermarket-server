var router = require('express').Router()
var requireDir = require('require-dir')
var ctrls = requireDir('../../ctrls')

router.post('/login', ctrls.login.checkUser)
router.post('/reg', ctrls.login.registered)
// 商品
router.post('/addCom', ctrls.supermarket.addCommodity)
router.post('/getCom', ctrls.supermarket.fetchCommodity)
router.post('/editCom', ctrls.supermarket.editCommodity)
router.post('/delCom', ctrls.supermarket.delCommodity)

// 供应商
router.post('/addSupp', ctrls.supermarket.addSupplier)
router.post('/getSupp', ctrls.supermarket.fetchSupplier)
router.post('/editSupp', ctrls.supermarket.editSupplier)
router.post('/delSupp', ctrls.supermarket.delSupplier)

// 订单
router.post('/addOrder', ctrls.supermarket.addOrder)
router.post('/getOrder', ctrls.supermarket.fetchOrder)
router.post('/editOrder', ctrls.supermarket.editOrder)
router.post('/delOrder', ctrls.supermarket.delOrder)

// 合同

// 采购记录

module.exports = router
