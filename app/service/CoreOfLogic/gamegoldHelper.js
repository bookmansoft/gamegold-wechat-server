const toolkit = require('gamerpc')
let facade = require('gamecloud')
let {ReturnCode, EntityType, NotifyType, IndexType} = facade.const
let remoteSetup = facade.ini.servers["Index"][1].node; //全节点配置信息
let CoreOfBase = facade.CoreOfBase

class gamegoldHelper extends facade.Service
{
     /**
     * 构造函数
     * @param {CoreOfBase} core
     */
    constructor(core) {
        super(core);

        this.remote = new toolkit.conn();
        //兼容性设置，提供模拟浏览器环境中的 fetch 函数
        this.remote.setup(remoteSetup);
        this.remote.setFetch(require('node-fetch'))  
    }

    /**
     * 将连接器设置为长连模式，同时完成登录、消息订阅等操作
     */
    setlongpoll() {
        this.remote.setmode(this.remote.CommMode.ws);
        return this;
    }

    notfiyToClient(uid, msgType, msg) {
        let domain = 'official';
        let domainId = `${domain}.${uid}`;
        let user = this.core.GetObject(EntityType.User, domainId, IndexType.Domain);
        if(!!user) {
            user.notify({type: NotifyType.test, info: {
                msgType: msgType,
                msg: msg
            }});
        }
    }

    async execute(method, params) {
        return await this.remote.execute(method, params)
    }

    watch(cb, etype = '0') {
        this.remote.watch(cb, etype);
        return this;
    }

    async orderPay(cid, user_id, sn, price, account) {
        let ret = await this.remote.execute('order.pay', [
            cid, //game_id
            user_id, //user_id
            sn, //order_sn订单编号
            price, //order_sum订单金额
            account  //指定结算的钱包账户，一般为微信用户的openid
          ]);
        console.log(ret);
        if(ret == null) {
            return {errcode: 'faile', errmsg: 'pay error'};
        } else {
            return {errcode: 'success', errmsg: 'orderpay:ok', ret: ret};
        }
    }

    revHex(data) {
        this.assert(typeof data === 'string');
        this.assert(data.length > 0);
        this.assert(data.length % 2 === 0);
      
        let out = '';
      
        for (let i = 0; i < data.length; i += 2)
          out = data.slice(i, i + 2) + out;
      
        return out;
    }  

    assert(value, message) {
        if (!value) {
          throw new assert.AssertionError({
            message,
            actual: value,
            expected: true,
            operator: '==',
            stackStartFunction: assert
          });
        }
    }
}

module.exports = gamegoldHelper;
