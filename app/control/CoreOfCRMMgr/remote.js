let facade = require('gamecloud')
let {ReturnCode, EntityType, PurchaseStatus} = facade.const
let UserEntity = facade.entities.UserEntity

/**
 * 路由消息控制器
 * Updated by liub on 2017-05-05.
 */
class remote extends facade.Control
{
    /**
     * 中间件设定
     */
    get middleware(){
        return ['parseParams', 'commonHandle'];
    }
    
    /**
     * 索引服通知预注册
     * @param svr
     * @param obj
     */
    userPreLogin(svr, obj){
        return UserEntity.preLogin(obj.msg);
    }
}

exports = module.exports = remote;
