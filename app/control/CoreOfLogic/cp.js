let facade = require('gamecloud')
let {TableType} = facade.const;
const axios = require('axios')

/**
 * 游戏的控制器
 * Updated by thomasFuzhou on 2018-11-19.
 */
class cp extends facade.Control
{
    /**
     * 查询系统中现有的所有CP列表：cp.list
     * @param {*} user 
     * @param {*} params 其中的成员 items 是传递给区块链全节点的参数数组
     */
    async List(user, params) {
        let ret = await this.core.service.gamegoldHelper.execute('cp.remoteQuery', []);
        if(ret.code==0) {
            ret.result.list.forEach(element => {
                this.core.callFunc("remotecall", "kv", user, {k: element.cid, v: JSON.stringify(element)});
            });
        }
        return {code: 0, data: ret.result};
    }

    async GetCpProxy(user, params) {
        let url = params.url;
        // 使用 axios 发送数据带微信支付服务器
        let result = await new Promise(function(resolve, reject){
            axios.get(url).then(res => {
                // 微信返回的数据也是 xml, 使用 xmlParser 将它转换成 js 的对象
                resolve(res.data);
            }).catch(err => {
                reject(err)
            })
        });
        return {code: 0, data: result};
    }

    /**
     * 查询系统中现有的CP数量
     * @param {*} user 
     * @param {*} params 其中的成员 items 是传递给区块链全节点的参数数组
     */
    async CpCount(user, params) {
        let page = 1;
        let num = 100000;
        let ret = await this.core.service.gamegoldHelper.execute('cp.list', [
            page,
            num
        ]);
        let count = ret==null ? 0 : ret.result.list.length
        return {code: 0, data: count};
    }

    /**
     * 根据ID查询CP注册信息 cid CP编码
     * @param {*} user 
     * @param {*} params 其中的成员 items 是传递给区块链全节点的参数数组
     */
    async ById(user, params) {
        let cid = params.cid
        let ret = await this.core.service.gamegoldHelper.execute('cp.byId', [cid]);
        return {code: 0, data: ret.result};
    }

    /**
     * 根据名称查询CP注册信息 name CP名称
     * @param {*} user 
     * @param {*} params 其中的成员 items 是传递给区块链全节点的参数数组
     */
    async ByName(user, params) {
        let ret = await this.core.service.gamegoldHelper.execute('cp.ByName', params.items);
        return {code: 0, data: ret.result};
    }

    //申请令牌
    async UserToken(user, params) {
        let ret = await this.core.service.gamegoldHelper.execute('token.user', [
            params.cid,
            params.user_id,
            null,
            params.account
        ]);
        if (!!ret && ret.result.hasOwnProperty("data")) {
            let addr = ret.result.data.addr;
            let userWallet = await this.core.GetMapping(TableType.userwallet).groupOf().where([
                ['cid', '==', params.cid],
                ['user_id', '==', params.user_id],
                ['account', '==', params.account]
            ]).records();
            if(userWallet.length == 0) {
                let userWalletItem = {
                    uid: user.id,
                    cid: params.cid,
                    addr: addr,
                    user_id: params.user_id,
                    account: params.account,
                };
                this.core.GetMapping(TableType.userwallet).Create(userWalletItem);
            }
        }
        return {code: 0, data: ret.result};
    }
}

exports = module.exports = cp;
