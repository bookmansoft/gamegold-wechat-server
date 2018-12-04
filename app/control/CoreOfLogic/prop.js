let facade = require('gamecloud')
let {ReturnCode, NotifyType} = facade.const

//引入工具包
const toolkit = require('gamegoldtoolkit')
//创建授权式连接器实例
const remote = new toolkit.conn();
//兼容性设置，提供模拟浏览器环境中的 fetch 函数
remote.setFetch(require('node-fetch'))  
function remoteSetup() {
    remote.setup({
        type:   'testnet',
        ip:     '114.116.14.176',     //远程服务器地址
        head:   'http',               //远程服务器通讯协议，分为 http 和 https
        id:     'primary',            //默认访问的钱包编号
        apiKey: 'bookmansoft',        //远程服务器基本校验密码
        cid:    'xxxxxxxx-game-gold-root-xxxxxxxxxxxx', //授权节点编号，用于访问远程钱包时的认证
        token:  '03aee0ed00c6ad4819641c7201f4f44289564ac4e816918828703eecf49e382d08', //授权节点令牌固定量，用于访问远程钱包时的认证
    });
}
/**
 * 节点控制器--道具
 * Updated by thomasFuzhou on 2018-11-19.
 */
class prop extends facade.Control
{
    /**
     * 中间件设置
     */
    get middleware() {
        return ['parseParams', 'commonHandle'];
    }

    //道具发送
    async PropOrder(user, params)  {
        remoteSetup();
        let cid = params.cid;
        let prop_ori_id = params.prop_ori_id;
        let prop_value = params.prop_value;
        let user_addr = params.user_addr;
        //npm run cli rpc prop.order {game_id} {prop_ori_id} {prop_value} {user_addr}
        let ret = await remote.execute('prop.order', [
            cid, //游戏编号
            prop_ori_id, //道具原始
            prop_value, //道具含金量
            user_addr //游戏内玩家的有效地址
        ]);
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.order:ok', ret: ret};
    }

    //道具确权
    async QueryProps(user, params) {
        remoteSetup();
        let cid = params.cid;
        let user_addr = params.user_addr;
        let ret = await remote.execute('queryProps', [
            cid, //游戏编号
            user_addr //游戏内玩家的有效地址
        ]);
        console.log(ret);
        return {errcode: 'success', errmsg: 'queryProps:ok', ret: ret};
    }

    //我的道具
    async PropList(user, params) {
        remoteSetup();
        let page = params.page;
        let openid = params.openid;
        let ret = await remote.execute('prop.list', [
            page, //游戏编号
            openid //openid
        ]);
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.list:ok', props: ret};
    }

    //道具熔铸
    async PropFound(user, params) {
        remoteSetup();
        let txid = params.txid;
        let ret = await remote.execute('prop.found', [
            txid, //生产者编码
        ]);
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.found:ok', ret: ret};
    }

    //道具捐赠
    //prop.donate hash index [openid]
    async PropDonate(user, params) {
        remoteSetup();
        let txid = params.txid;
        let index = params.index;
        let openid = params.openid;
        let ret = await remote.execute('prop.donate', [
            txid,
            index,
            openid
        ]);
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.donate:ok', ret: ret};
    }

    //道具接收
    //prop.receive raw [openid]
    async PropReceive(user, params) {
        remoteSetup();
        let raw = params.raw;
        let openid = params.openid;
        let ret = await remote.execute('prop.receive', [
            raw, 
            openid,
        ]);    
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.receive:ok', ret: ret};
    }  

    //道具转移
    //prop.send addr hash index [openid]
    async PropSend(user, params) {
        remoteSetup();
        let addr = params.addr;
        let txid = params.txid;
        let index = params.index;
        let openid = params.openid;
        let ret = await remote.execute('prop.send', [
            addr, 
            txid,
            index,
            openid
        ]); 
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.send:ok', ret: ret};
    }     

    //道具出售
    //prop.sale hash index fixedPrice [openid]
    async PropSale(user, params) {
        remoteSetup();
        let txid = params.txid;
        let index = params.index;
        let fixedPrice = params.fixedPrice;
        let openid = params.openid;
        let ret = await remote.execute('prop.sale', [
            txid,
            index,
            fixedPrice,
            openid
        ]);
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.sale:ok', ret: ret};
    }

    //道具市场
    async PropListMarket(user, params) {
        remoteSetup();
        let ret = await remote.execute('prop.list.market', []);
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.list.market:ok', ret: ret};
    }

    //道具购买
    //prop.buy pid, price, openid
    async PropBuy(user, params) {
        remoteSetup();
        let pid = params.pid;
        let price = params.price;
        let openid = params.openid;
        let ret = await remote.execute('prop.buy', [
            pid,
            price,
            openid
        ]);     
        console.log(ret);
        return {errcode: 'success', errmsg: 'prop.buy:ok', ret: ret}; 
    }
}

exports = module.exports = prop;
