let facade = require('gamecloud')
let {EntityType, IndexType} = facade.const;

/**
 * 节点控制器--道具
 * Updated on 2018-11-19.
 */
class prop extends facade.Control
{
    /**
     * 我的道具
     * @param {*} user 
     * @param {*} params 
     */
    async list(user, params) {
        let ret = await this.core.service.gamegoldHelper.execute('prop.query', [[
            ['page', params.page||1],
            ['account', user.account],
            ['oid', '!=', ''], //过滤没有模板ID的道具
            ['pst', 'exclude', [2]],
        ]]);

        if(ret.code == 0) {
            for(let prop of ret.result.list) {
                let cp = this.core.GetObject(EntityType.blockgame, prop.cid, IndexType.Domain);
                if(cp) {
                    prop.cpurl = cp.orm.cpurl;
                    prop.cp_name = cp.orm.cp_name;

                    //todo 检测那些不在CP默认地址上的道具，进行自动迁移，以方便CP道具确权
                }
            }
            //弥补下协议定义上的差别
            ret.result.total = ret.result.page;
            ret.result.page = ret.result.cur;
        }

        return {code: ret.code, data : ret.result};
    }

    /**
     * 查询拍卖中的道具列表
     * @param {*} user 
     * @param {*} params 
     */
    async listMarket(user, params) {
        // pst: enum propStatus {
        //     Sale: 2,        //拍卖中    - 发起了拍卖交易，等待竞价结束
        //     Borrow: 3,      //已借出    - 道具已经借出
        //     Delete: 4,      //已删除    - 道具已经彻底失效、不可恢复
        //     Ready: 9,       //已确认    - 道具处于确认状态
        // }
        let ret = await this.core.service.gamegoldHelper.execute('prop.remoteQuery', [[['pst', 2]]]);
        if(ret.code == 0) {
            for(let prop of ret.result.list) {
                let cp = this.core.GetObject(EntityType.blockgame, prop.cid, IndexType.Domain);
                if(cp) {
                    prop.cpurl = cp.orm.cpurl;
                    prop.cp_name = cp.orm.cp_name;
                }
            }
            //弥补下协议定义上的差别
            ret.result.total = ret.result.page;
            ret.result.page = ret.result.cur;
        }

        return {code: ret.code, data: ret.result};
    }

    /**
     * 道具购买
     * @param {*} user 
     * @param {*} params 
     */
    async PropBuy(user, params) {
        let pid = params.pid;
        let price = params.price;
        let ret = await this.core.service.gamegoldHelper.execute('prop.buy', [
            pid,
            price,
            user.account
        ]);     

        if(!!ret && ret.code == 0) {
            return {code: 0, data: ret.result}; 
        } else {
            return {code: -1, msg: 'prop.buy:ok'};
        }
    }

    /**
     * 道具数量
     * @param {*} user 
     * @param {*} params 
     */
    async PropCount(user, params) {
        let ret = await this.core.service.gamegoldHelper.execute('prop.list', [0, user.account]);
        user.baseMgr.info.setAttr('prop_count', ret.result.count);
        return {code: 0, data: {count: ret.result.count}};
    }

    /**
     * 道具熔铸
     * @param {*} user 
     * @param {*} params 
     */
    async PropFound(user, params) {
        let pid = params.pid;
        let ret = await this.core.service.gamegoldHelper.execute('prop.found', [
            pid, //生产者编码
        ]);
        return {code: 0, msg: 'prop.found:ok', data: ret.result};
    }

    /**
     * 道具捐赠 prop.donate hash index [openid]
     * @param {*} user 
     * @param {*} params 
     */
    async PropDonate(user, params) {
       let ret = await this.core.service.gamegoldHelper.execute('prop.donate', [
            params.pid,
            user.account,
        ]);

        if(!!!ret || ret.code != 0) {
            return {code: ret.code, msg: 'fail'};
        } else {
            return {code: 0, data: ret.result};
        }
    }

    /**
     * 道具接收
     * @param {*} user 
     * @param {*} params 
     */
    async PropReceive(user, params) {
        let raw = params.raw;
        let ret = await this.core.service.gamegoldHelper.execute('prop.receive', [
            raw, 
            user.account,
        ]);    
        return {code: 0, msg: 'prop.receive:ok', data: ret.result};
    }  

    /**
     * 道具转移
     * @param {*} user 
     * @param {*} params 
     */
    async send(user, params) {
        let addr = params.addr;
        let pid = params.pid;
        let ret = await this.core.service.gamegoldHelper.execute('prop.send', [
            addr, 
            pid,
            user.account
        ]); 
        return {code: 0, data: ret.result};
    }     

    //道具出售
    async sale(user, params) {
        let pid = params.pid;
        let fixedPrice = params.fixedPrice;
        let ret = await this.core.service.gamegoldHelper.execute('prop.sale', [
            pid,
            fixedPrice,
            user.account
        ]);
        return {code: 0, data: ret.result};
    }
}

exports = module.exports = prop;
