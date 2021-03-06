let facade = require('gamecloud')
let {EntityType, InviteType, NotifyType, ResType,ActivityType,em_Condition_Type,em_Condition_Checkmode} = facade.const

function handle(event){ 
    /**
     * @type {UserEntity}
     */
    let $user = this.GetObject(EntityType.User, event.dst);
    if(!!$user){
        $user.getInviteMgr().Clear(InviteType.AllyReq, event.aid); //删除邀请
    }
}

module.exports.handle = handle;
