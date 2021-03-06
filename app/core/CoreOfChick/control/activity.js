let facade = require('gamecloud')

/**
 * 活动功能相关的控制器
 * Created by liub on 2017-07-01.
 */

class activity extends facade.Control {
    getInfo(user) {
        return {
            code: this.core.const.ReturnCode.Success, 
            data: this.core.service.activity.getInfo(user)
        };
    }

    /**
     * 领取奖励
     * @param {*} user 
     * @param {*} data 
     */
    getBonus(user, data){
        data.id = parseInt(data.id || 0);
        return this.core.service.activity.getBonus(user, data.id);
    }

    /**
     * 获取活动排名列表
     */
    getList(user){
        return {code: this.core.const.ReturnCode.Success, data: this.core.service.activity.rankList(user.id)};
    }
}

exports = module.exports = activity;
