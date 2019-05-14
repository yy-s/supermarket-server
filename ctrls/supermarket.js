const _ = require('lodash')
const superMarket = require('../model/supermarket')

exports.addCommodity = async function (req, res) {
    try {
        let result = await superMarket.addCommodity(req.body)
        if (!result) {
            res.status(200).json({
                'code': 3,
                'data': '添加商品信息失败'
            })
        }
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('addCommodity', e)
        res.status(500).json(e)
    }
}
exports.fetchCommodity = async function (req, res) {
    let {page, pageSize, search, by} = req.body
    try {
        let start = (page - 1) * pageSize
        let stop = page * pageSize
        let result = await superMarket.fetchCommodity(start, stop, search, by)
        if (!result || _.size(result) === 0) {
            res.status(200).json({
                'code': 3,
                'data': '暂无数据'
            })
        }
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('fetchCommodity', e)
        res.status(500).json(e)
    }
}
exports.editCommodity = async function (req, res) {
    let {whereStr, updateStr} = req.body
    try {
        let result = await superMarket.editCommodity(whereStr, updateStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('editCommodity', e)
        res.status(500).json(e)
    }
}
exports.delCommodity = async function (req, res) {
    let {whereStr} = req.body
    try {
        let result = await superMarket.delCommodity(whereStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('delCommodity', e)
        res.status(500).json(e)
    }
}

exports.addSupplier = async function (req, res) {
    try {
        let data = await superMarket.addSupplier(req.body)
        if (!data) {
            res.status(200).json({
                'code': 3,
                'data': '添加供应商信息出错'
            })
        }
        res.status(200).json({
            'code': 0,
            data
        })
    } catch (e) {
        console.log('addSupplier', e)
        res.status(500).json(e)
    }
}
exports.fetchSupplier = async function (req, res) {
    let {page, pageSize, search, by} = req.body
    try {
        let start = (page - 1) * pageSize
        let stop = page * pageSize
        let result = await superMarket.fetchSupplier(start, stop, search, by)
        if (!result || _.size(result) === 0) {
            res.status(200).json({
                'code': 3,
                'data': '暂无数据'
            })
        }
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('fetchSupplier', e)
        res.status(500).json(e)
    }
}
exports.editSupplier = async function (req, res) {
    let {whereStr, updateStr} = req.body
    try {
        let result = await superMarket.editSupplier(whereStr, updateStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('editSupplier', e)
        res.status(500).json(e)
    }
}
exports.delSupplier = async function (req, res) {
    let {whereStr} = req.body
    try {
        let result = await superMarket.delSupplier(whereStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('delSupplier', e)
        res.status(500).json(e)
    }
}

exports.addOrder = async function (req, res) {
    try {
        let data = await superMarket.addOrder(req.body)
        if (!data) {
            res.status(200).json({
                'code': 3,
                'data': '添加供应商信息出错'
            })
        }
        res.status(200).json({
            'code': 0,
            data
        })
    } catch (e) {
        console.log('addOrder', e)
        res.status(500).json(e)
    }
}
exports.fetchOrder = async function (req, res) {
    let {page, pageSize, search, status, by, supplier} = req.body
    try {
        let start = (page - 1) * pageSize
        let stop = page * pageSize
        let result = await superMarket.fetchOrder(start, stop, search, status, by, supplier)
        if (!result || _.size(result) === 0) {
            res.status(200).json({
                'code': 3,
                'data': '暂无数据'
            })
        }
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('fetchOrder', e)
        res.status(500).json(e)
    }
}
exports.editOrder = async function (req, res) {
    let {whereStr, updateStr} = req.body
    try {
        let result = await superMarket.editOrder(whereStr, updateStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('editSupplier', e)
        res.status(500).json(e)
    }
}
exports.delOrder = async function (res, res) {

}

exports.addPurchase = async function (req, res) {
    try {
        let data = await superMarket.addPurchase(req.body)
        if (!data) {
            res.status(200).json({
                'code': 3,
                'data': '添加供应商信息出错'
            })
        }
        res.status(200).json({
            'code': 0,
            data
        })
    } catch (e) {
        console.log('addOrder', e)
        res.status(500).json(e)
    }
}
exports.fetchPurchase = async function (req, res) {
    let {page, pageSize, search, searchid, by} = req.body
    try {
        let start = (page - 1) * pageSize
        let stop = page * pageSize
        let result = await superMarket.fetchPurchase(start, stop, search, searchid, by)
        if (!result || _.size(result) === 0) {
            res.status(200).json({
                'code': 3,
                'data': '暂无数据'
            })
        }
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('fetchOrder', e)
        res.status(500).json(e)
    }
}
exports.editPurchase = async function (req, res) {
    let {whereStr, updateStr} = req.body
    try {
        let result = await superMarket.editPurchase(whereStr, updateStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('editSupplier', e)
        res.status(500).json(e)
    }
}
exports.delPurchase = async function (res, res) {

}

exports.addContract = async function (req, res) {
    try {
        let data = await superMarket.addContract(req.body)
        if (!data) {
            res.status(200).json({
                'code': 3,
                'data': '添加供应商信息出错'
            })
        }
        res.status(200).json({
            'code': 0,
            data
        })
    } catch (e) {
        console.log('addOrder', e)
        res.status(500).json(e)
    }
}
exports.fetchContract = async function (req, res) {
    let {page, pageSize, search, action, by} = req.body
    try {
        let start = (page - 1) * pageSize
        let stop = page * pageSize
        let result = await superMarket.fetchContract(start, stop, search, action, by)
        if (!result || _.size(result) === 0) {
            res.status(200).json({
                'code': 3,
                'data': '暂无数据'
            })
        }
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('fetchOrder', e)
        res.status(500).json(e)
    }
}
exports.editContract = async function (req, res) {
    let {whereStr, updateStr} = req.body
    try {
        let result = await superMarket.editContract(whereStr, updateStr)
        res.status(200).json({
            'code': 0,
            'data': result
        })
    } catch (e) {
        console.log('editSupplier', e)
        res.status(500).json(e)
    }
}
exports.delContract = async function (res, res) {

}
