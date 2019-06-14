let facade = require('gamecloud')
let {EntityType, IndexType, ReturnCode} = facade.const
let {now, sign} = facade.util

//为短信、邮箱验证提供签名缓存
let signMap = new Map();
//提供一个短信验证码模拟查询地址
let keyMap = new Map();

/**
 * 后期绑定功能
 * 1. 客户端将手机号码作为上行参数，调用此函数
 * 2. 客户端将手机验证码提交验证
 * 3. 系统验证通过后，将手机号码和当前用户绑定
 */
class bindafter extends facade.Control
{
    /**
     * 获取手机验证码，这是一个控制器方法，必须在登录状态下调用
     * @param {*} objData 
     */
    async auth(user, objData) {
        switch(objData.addrType) {
            default: {
                //查询历史用户信息
                let history = facade.GetObject(EntityType.User, objData.address, IndexType.Phone);
                if(!!history) {
                    if(history.openid != user.openid) {
                        return {code: ReturnCode.userIllegal}; 
                    }
                }
                break;
            }
        }

        let ret = {
            t: now(),                               //当前时间戳，游戏方必须验证时间戳，暂定有效 期为当前时间前后 5 分钟
            nonce: Math.random()*1000 | 0,          //随机数
            addrType: objData.addrType || 'phone',  //地址类型，'phone'
            address: objData.address,               //地址内容，如手机号码
            openid: user.openid,                    //用户登录时使用的认证信息
        };
        //生成签名字段        
        let $sign = sign(ret, this.parent.options[user.domain].game_secret);
        //用签名字段生成6位数字键
        $sign = this.parent.service.gamegoldHelper.remote.hash256(Buffer.from($sign, 'utf8')).readUInt32LE(0, true) % 1000000;
        //放入缓存表
        signMap.set($sign, ret);
        keyMap.set(user.openid, $sign);

        //向用户发送短信或邮件
        this.parent.notifyEvent('sys.sendsms', {params:{addrType: objData.addrType, address: objData.address, content: $sign}});

        return {code: ReturnCode.Success, data: ret};
    }

    /**
     * 查询短信验证码，注意只是测试阶段开放
     * @param {*} user 
     */
    async getKey(user) {
        if(!this.parent.options.debug) {
            throw new Error('authThirdPartFailed');
        }

        if(keyMap.has(user.openid)) {
            return {code: ReturnCode.Success, data: keyMap.get(user.openid)};
        } else {
            return {code: ReturnCode.userIllegal};
        }
    }

    /**
     * 验签函数，调用结果直接返回客户端
     * @param {*} user 
     * @param {*} objData 
     */
    async check(user, objData) {
        if(!signMap.has(objData.openkey)) {
            return {code: ReturnCode.userIllegal};
        }

        let item = signMap.get(objData.openkey);

        let _sign = (item.nonce == objData.auth.nonce);
        let _exp = (Math.abs(item.t - now()) <= 300);
        if (!_sign || !_exp) {
            return {code: ReturnCode.userIllegal};
        }

        let history = facade.GetObject(EntityType.User, item.address, IndexType.Phone);
        if(!history) {
            switch(item.addrType) {
                default: {
                    this.parent.notifyEvent('user.bind', {user:user, params:{addrType: item.addrType, address: item.address}});
                    break;
                }
            }
        } else {
            if(history.openid != item.openid) {
                return {code: ReturnCode.userIllegal};
            }
        }

        return {code: ReturnCode.Success};
    }
}

exports = module.exports = bindafter;
