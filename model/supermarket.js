const _ = require('lodash')
const db = require('../orm/datasource')

module.exports = {
    addCommodity,
    fetchCommodity,
    editCommodity,
    delCommodity,
    addSupplier,
    fetchSupplier,
    editSupplier,
    delSupplier,
    addOrder,
    fetchOrder,
    editOrder,
    addPurchase,
    fetchPurchase,
    editPurchase,
    addContract,
    fetchContract,
    editContract
}

async function addCommodity(params) {
    let info = await db.createData('Commodity', params)
    return !!info['_id']
}

async function fetchCommodity(start, stop, search, by) {
    let result = {}
    let info = await db.retrieveData('Commodity')
    info = _.filter(info, (s) => {
        return s.By === by
    })
    if (search) {
        info = _.filter(info, (s) => {
            return s.CName.toString().indexOf(search) >= 0
        })
    }
    result.count = _.size(info)
    result.info = _.slice(info, start, stop)
    _.each(result.info, (single, i) => {
        single.number = start * stop + i + 1
    })
    return result
}

async function editCommodity(whereStr, updateStr) {
    let result = await db.updateData('Commodity', whereStr, updateStr)
    return !!result.ok
}

async function delCommodity(whereStr) {
    let result = await db.deleteData('Commodity', whereStr)
    return !!result
}

async function addSupplier(params) {
    let info = await db.createData('Supplier', params)
    return !!info['_id']
}

async function fetchSupplier(start, stop, search, by) {
    let result = {}
    let info = await db.retrieveData('Supplier')
    info = _.filter(info, (s) => {
        return s.By === by
    })
    if (search) {
        info = _.filter(info, (s) => {
            return s.SName.toString().indexOf(search) >= 0
        })
    }
    result.count = _.size(info)
    result.info = _.slice(info, start, stop)
    _.each(result.info, (single, i) => {
        single.number = start * stop + i + 1
    })
    return result
}

async function editSupplier(whereStr, updateStr) {
    let result = await db.updateData('Supplier', whereStr, updateStr)
    return !!result.ok
}

async function delSupplier(whereStr) {
    let result = await db.deleteData('Supplier', whereStr)
    return !!result
}

async function addOrder(params) {
    let info = await db.createData('Order', params)
    return !!info['_id']
}

async function editOrder(whereStr, updateStr) {
    let result = await db.updateData('Order', whereStr, updateStr)
    return !!result.ok
}

async function fetchOrder(start, stop, search, status, by, supplier) {
    let result = {}
    let info = await db.retrieveData('Order')
    info = _.filter(info, (s) => {
        if (supplier) {
            return s.supplier === supplier
        } else {
            return s.By === by
        }
        
    })
    if (status == 3) {
        info = _.filter(info, (s) => {
            return _.eq(s.status, 3)
        })
    } else if (status == 5) {
        info = _.filter(info, (s) => {
            return _.eq(s.status, 5)
        })
    }
    if (search) {
        info = _.filter(info, (s) => {
            return s.SName.toString().indexOf(search) >= 0
        })
    }
    result.count = _.size(info)
    result.info = _.slice(info, start, stop)
    _.each(result.info, (single, i) => {
        single.number = start * stop + i + 1
    })
    return result
}

async function addPurchase(params) {
    let comms = _.cloneDeep(params.comms)
    await Promise.all(_.map(comms, async (item) => {
        let info = await db.retrieveData('Commodity', {id: item.id})
        if (info[0]) {
            if (info[0].CName !== item.CName) {
                return `${item.CName}商品信息有误`
            } else {
                item.count = _.toInteger(info[0].count) + _.toInteger(item.count)
                await db.updateData('Commodity', {id: item.id}, item)
            }
        }
        if (!info || !_.size(info) || !info[0]) {
            item.By = params.By
            await db.createData('Commodity', item)
        }
    }))
    let info = await db.createData('Purchase', params)
    return !!info['_id']
}

async function fetchPurchase(start, stop, search, searchid, by) {
    let result = {}
    let info = await db.retrieveData('Purchase')
    info = _.filter(info, (s) => {
        return s.By === by
    })
    if (search) {
        info = _.filter(info, (s) => {
            if (!s.orderName) {
                return null
            }
            return s.orderName.toString().indexOf(search) >= 0
        })
    }
    if (searchid) {
        info = _.filter(info, (s) => {
            if (!s.orderID) {
                return null
            }
            return s.orderID == searchid
        })
    }
    result.count = _.size(info)
    result.info = info
    if (stop) {
        result.info = _.slice(info, start, stop)
    }
    _.each(result.info, (single, i) => {
        single.number = start * stop + i + 1
    })
    return result
}

async function editPurchase(whereStr, updateStr) {
    let result = await db.updateData('Purchase', whereStr, updateStr)
    return !!result.ok
}

async function addContract(params) {
    let info = await db.createData('Contract', params)
    return !!info['_id']
}

async function fetchContract(start, stop, search, action, by) {
    let result = {}
    let info = await db.retrieveData('Contract')
    info = _.filter(info, (s) => {
        return s.By === by
    })
    if (action === 'doing') {
        info = _.filter(info, (s) => {
            return _.eq(s.type, 0)
        })
        if (search) {
            info = _.filter(info, (s) => {
                return s.CID.toString().indexOf(search) >= 0
            })
        }
    } else if (action === 'ending') {
        info = _.filter(info, (s) => {
            return _.eq(s.type, 1)
        })
        if (search) {
            info = _.filter(info, (s) => {
                return s.CID.toString().indexOf(search) >= 0
            })
        }
    }
    result.count = _.size(info)
    result.info = _.slice(info, start, stop)
    _.each(result.info, (single, i) => {
        single.number = start * stop + i + 1
    })
    return result
}

async function editContract(whereStr, updateStr) {
    let result = await db.updateData('Contract', whereStr, updateStr)
    return !!result.ok
}
