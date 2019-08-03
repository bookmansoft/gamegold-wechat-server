let facade = require('gamecloud')
let {RecordType, ResType} = facade.const

/**
 * 用户注册事件处理句柄
 * Created by admin on 2017-05-26.
 */
function handle(data) {
    //console.log(`${data.user.openid}在${this.options.serverType}.${this.options.serverId}上创建游戏角色`);

    //region 必要的数据初始化工作
    data.user.getBonus({type: ResType.Role, id:1001, num:1});
    data.user.getBonus({type: ResType.Scene, id:18, num:1});
    data.user.getBonus({type: ResType.Road, id:3001, num:1});

    data.user.getInfoMgr().SetRecord(RecordType.Role, 21001);     //默认角色
    data.user.getInfoMgr().SetRecord(RecordType.Scene, 30018);    //默认场景
    data.user.getInfoMgr().SetRecord(RecordType.Road, 13001);     //默认道路
    //endregion

    if(!this.options.debug) {
        switch(data.user.domainType) {
            default: //腾讯平台数据上报接口
                break;
        }
    }
}

module.exports.handle = handle;
