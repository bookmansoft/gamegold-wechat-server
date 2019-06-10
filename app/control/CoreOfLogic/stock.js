let facade = require('gamecloud');
let tableType = require('../../util/tabletype');
let tableField = require('../../util/tablefield');
let userHelp = require('../../util/userhelp')

/**
 * 管理后台
 */
class stock extends facade.Control
{
    //众筹列表
    async Stocks(user, params) {
        let stockList = await facade.GetMapping(tableType.stock).groupOf().where([['status', '==', 1]]).records(tableField.stock)
        return {errcode: 'success', data: stockList} 
    }

    //众筹详情
    async StockInfo(user, params) {
        let stockInfo = facade.GetObject(tableType.stock, params.id);          
        if(!!userStock) {
            return {errcode: 'success', data: stockInfo};
        }
        return {errcode: 'fail', data: null};
    }

    //众筹详情
    async StockSale(user, params) {
        let uid = params.uid
        let cid = params.cid
        let price = params.price
        let quantity = params.quantity
        let current_time = parseInt(new Date().getTime() / 1000)

        let userStockItems = facade.GetMapping(tableType.userStock).groupOf().where([
            ['uid', '==', uid],
            ['cid', '==', cid]
        ]).records();
        if(userStockItems.length >0 ) {
            let userStockItem = userStockItems[0]
            userStockItem.setAttr('quantity', userStockItem.orm.quantity - quantity)
            userStockItem.orm.save()
        }

        let userStockLogItem = {
            uid: uid,
            cid: cid,
            quantity: quantity,
            pay_at: current_time,
            status: 0
        }
        await facade.GetMapping(tableType.userStockLog).Create(userStockLogItem)
        return {errcode: 'success', data: userStockLogItem};

    }

    //用户众筹记录
    async UserStockLogs(user, params) {
        let uid = params.uid
        let cid = params.cid
        let userStockLogs = await facade.GetMapping(tableType.userStockLog).groupOf()
            .where([
                ['uid', '==', uid],
                ['cid', '==', cid]
            ]).records(tableField.userStockLog)
        return {errcode: 'success', data: userStockLogs}    
    }

    //用户众筹记录
    async UserStocks(user, params) {
        let uid = params.uid
        let userStockActs = await facade.GetMapping(tableType.userStock).groupOf()
            .where([
                ['uid', '==', uid]
            ]).records(tableField.userStock)
        return {errcode: 'success', data: userStockActs}    
    }

    //用户众筹记录详情
    async UserStockInfo(user, params) {
        let userStock = facade.GetObject(tableType.userStock, params.id);          
        if(!!userStock) {
            return {errcode: 'success', data: userStock};
        }
        return {errcode: 'fail', data: null};
    }

    async StockSend(user, params) {
        let uid = params.uid
        let cid = params.cid
        let addr = await userHelp.getAddrFromUserIdAndCid(uid, cid)
        let ret = await facade.current.service.gamegoldHelper.execute('stock.send', [cid, 100, addr, 'alice']);
        return {errcode: 'success', data: ret} 
    }

}

exports = module.exports = stock;
