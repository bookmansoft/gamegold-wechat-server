/**
 * Created by liub on 2017-04-06.
 */
let facade = require('gamecloud')
let {RecordType, UserStatus, GuideList, EntityType, RankType, em_Effect_Comm, ActivityType, NotifyType, ActionExecuteType, em_Condition_Type, ResType, OperEnum, ReturnCode} = facade.const
let BonusObject = facade.Util.BonusObject

class index extends facade.Control
{
    /**
     * 用户登录
     * @param user
     * @param objData
     * @returns {Promise.<{}>}
     */
    async 1000(user, objData) {
        return this.login(user, objData);
    }
    
    async login(user, objData){
        try {
            return await this.core.control.login.UserLogin(user, objData);
        } catch(e) {
            console.error(e);
         }
    }

    /**
     * 游戏结束后上报积分和获得的金币
     * @param {UserEntity} user
     * @param {*} objData
     * @returns {Promise.<void>}
     *
     * @note 测试如下问题：
     * 1、新的高分（包括使用复活道具获得的分数）是否正确刷新
     * 2、每日最高分（不一定是历史最高分）是否正确刷新
     *
     * @todo:
     * 1、需要增加中段验证机制：5分钟内至少提交一次分数刷新请求，需要携带当前authCode，服务端下发新的authCode，如果authCode不一致则分数和奖励被清零
     */
    async 1001(user, objData){
        //对用户输入要有一个合理区间判定，还可能需要频次控制 - 游戏时长决定最高分数和金币：scoreMax = timeLen * 3, moneyMax = timeLen * 1.5
        try {
            if(objData.start == 0){
                switch(user.getInfoMgr().GetRecord(RecordType.Role)){
                    case 1002:
                        this.core.notifyEvent('user.task', {user:user, data:{type:facade.const.em_Condition_Type.useRole1002, value:1, mode:facade.const.em_Condition_Checkmode.add}});
                        break;
                }

                switch(user.getInfoMgr().GetRecord(RecordType.Scene)){
                    case 2002:
                        this.core.notifyEvent('user.task', {user:user, data:{type:facade.const.em_Condition_Type.useScene2002, value:1, mode:facade.const.em_Condition_Checkmode.add}});
                        break;
                }

                user.battleMoney = 0;
                user.battltTime = facade.util.now();
                return {code:ReturnCode.Success};
            } else {
                let tl = Math.min(1800, !!user.battltTime ? facade.util.now() - user.battltTime : 0); //限制最大值
                let _score = parseInt(objData.score);

                //计算实际所得金币
                let _money = user.effect().CalcFinallyValue(
                    em_Effect_Comm.MoneyAdded, 
                    parseInt(objData.money) - user.battleMoney
                ) | 0;
                user.battleMoney = parseInt(objData.money);

                let resultOk = (_score<50 && _money<50) || (_score <= tl * 9 && _money < tl * 4.5);
                if(this.core.options.debug || resultOk){
                    user.score = _score;             //记录新的分数
                    
                    //region 任务检测
                    this.core.notifyEvent('user.task', {user:user, data:[
                        {type:facade.const.em_Condition_Type.roundScore, value:user.score, mode:facade.const.em_Condition_Checkmode.absolute},
                        {type:facade.const.em_Condition_Type.roundMoney, value:_money, mode:facade.const.em_Condition_Checkmode.absolute},
                        {type:facade.const.em_Condition_Type.death, value:1, mode:facade.const.em_Condition_Checkmode.add},
                        {type:facade.const.em_Condition_Type.totalMoney, value:_money, mode:facade.const.em_Condition_Checkmode.add},
                    ]});
                    //endregion

                    if(!this.core.options.debug){
                        // 此接口经测试暂不可用（appid非法），好友积分&排名已调整为本地管理
                        // let rt = await this.core.service.txApi.set_achievement(user, this.core.options.auth.pf, _score);
                        // if(rt.ret != 0){
                        //     console.log(rt);
                        // }
                    }

                    user.getBonus({type:ResType.Coin, num:_money});

                    let rt = this.core.GetRanking(this.core.entities.UserEntity).result(user.id, RankType.total);
                    let rd = this.core.GetRanking(this.core.entities.UserEntity).result(user.id, RankType.daily);
                    return {
                        code: facade.const.ReturnCode.Success,
                        data:{
                            id: user.id,
                            score: rt.value,
                            rank: rt.rank,
                            scored: rd.value,
                            rankd: rd.rank,
                            money: user.baseMgr.item.GetRes(ResType.Coin)
                        }
                    }
                } else {
                    return {code: facade.const.ReturnCode.illegalData};
                }
            }
        } catch(e) {
            console.log(e);
            return {
                code:ReturnCode.Error
            };
        }
    }

    /**
     * 使用道具
     * @param user
     * @param objData
     * @returns {Promise.<{code, data}|{code}|*>}
     */
    async 1002(user, objData) {
        objData.id = objData.id || 0;
        if(typeof objData.id == 'string'){
            objData.id = parseInt(objData.id);
        }
        let ret = await this.core.control.item.useItem(user, objData);
        return ret;
    }

    /**
     * 修改道路、场景、角色
     * @param {UserEntity} user
     * @param {Object} objData
     * @returns {Promise.<{code: number, data: {scene: (*|number), road: (*|number), role: (*|number)}}>}
     */
    async 1009(user, objData) {
        //根据上行的复合索引，查询相应的资源配置信息
        let bi = this.core.fileMap.itemdata[objData.id];
        if(!!bi) {
            if(!user.getPocket().GetRes(bi.type, bi.id)) {
                return {code:ReturnCode.itemNotExist};
            }
    
            switch(bi.type) {
                case 'role':
                    user.getInfoMgr().SetRecord(RecordType.Role, objData.id);
                    break;
                case 'scene':
                    user.getInfoMgr().SetRecord(RecordType.Scene, objData.id);
                    break;
                case 'road':
                    user.getInfoMgr().SetRecord(RecordType.Road, objData.id);
                    break;
            }

            return {
                code:ReturnCode.Success, 
                data: {
                    scene: user.getInfoMgr().GetRecord(RecordType.Scene),
                    road: user.getInfoMgr().GetRecord(RecordType.Road),
                    role: user.getInfoMgr().GetRecord(RecordType.Role),
                }
            };
        } else {
            return {code:ReturnCode.itemNotExist};
        }
    }

    /**
     * 分享获得复活道具
     * @param user
     * @param objData
     * @returns {Promise.<{code: number}>}
     */
    async 1010(user, objData){
        return this.core.control.social.share(user, objData);
    }

    /**
     * 获取背包列表
     * @param user
     * @param objData
     * @returns {Promise.<*>}
     */
    async 2001(user, objData){
        try{
            return await this.core.control.item.list(user);
        }catch(e){}
    }

    /**
     * 获取系统配置文件（JSON）
     * @param user
     * @param objData
     * @returns {Promise.<*>}
     */
    async config(user, objData) {
        if(objData.file == "sys"){ //禁止客户端直接访问系统配置文件
            return {code: ReturnCode.illegalData};
        }

        try{
            if(!!this.core.fileMap[objData.file]){
                return {code:ReturnCode.Success, data:this.core.fileMap[objData.file]};
            }
            else{
                return {code:ReturnCode.Error};
            }
        }catch(e){}
    }

    /**
     * 获取当前的加持效果
     * @param user
     * @param objData
     * @returns {Promise.<{code: number, data: (Promise|*)}>}
     */
    async getEffect(user, objData){
        return {code: ReturnCode.Success, data: user.getEffect()};
    }

    /**
     * 社交类操作统一接口
     * @param {*} user 
     * @param {*} objData 
     */
    async sendHello(user, objData){
        return await this.core.control.social.action(user, objData);
    }

    /**
     * 收获好友点的赞，得到随机奖励
     * @param user
     * @param objData
     */
    async bonusHello(user, objData){
        objData.actionType = NotifyType.socialBonusHello;
        return await this.core.control.social.action(user, objData);
    }
    /**
     * 附加新手引导接口
     * @param {*} user
     * @param {*} objData
     */
    async checkGuide(user, objData){
        let id = GuideList[user.baseMgr.vip.GuideNo].next;
        return id;
    }
    /**
     * 礼包统一接口
     * @param {UserEntity} user 
     * @param {*} objData
     * objData.type 1:新用户礼包，2：累计7日登陆礼包，3：中秋礼包，4：国庆活动礼包，5：国庆活动累计消费礼包，6：国庆活动角色培养礼包 
     */
    async getGift(user,objData){
		if(typeof objData.type != "number"){
            objData.type = parseInt(objData.type);
        }
        let bonus = null;	
        switch(objData.type){
            case 1:
                if(!user.baseMgr.info.CheckStatus(UserStatus.isGetNewbieBonus)){
                    user.baseMgr.info.SetStatus(UserStatus.isGetNewbieBonus);
                    bonus = this.core.fileMap.vip.newbieGift;
                    user.getBonus(bonus);
                    return {code:ReturnCode.Success,data:{bonus:bonus}};
                }
                else {
                    return {code:ReturnCode.taskBonusHasGot};
                }
                break;
            case 2:
                bonus = user.getTaskMgr().getBonus("3003");
                if(bonus != '-1' && bonus != '-2'){
                    return {code:ReturnCode.Success,data:{bonus:[{type: ResType.VIP,num:1}]}};
                }
                else {
                    return {code:ReturnCode.taskNotFinished};
                }
                break;
            case 3:
                if(!user.baseMgr.info.CheckStatus(UserStatus.isGetFestivalGift)){
                    user.baseMgr.info.SetStatus(UserStatus.isGetFestivalGift);
                    bonus = this.core.fileMap.vip.festivalGift;
                    user.getBonus(bonus);
                    return {code:ReturnCode.Success,data:{bonus:bonus}};
                }
                else {
                    return {code:ReturnCode.taskBonusHasGot};
                }
                break;
            default:
                return {code:ReturnCode.illegalData};
                break;
        }
    }

    /**
     * 国庆礼包统一接口
     * @param {*} user 
     * @param {*} objData
     * objData.type 1：国庆活动礼包，2：国庆活动累计消费礼包，3：国庆活动角色培养礼包 
     */
    async getFesGift(user,objData){
		if(typeof objData.type != "number"){
            objData.type = parseInt(objData.type);
        }
        let bonus = null;	
        switch(objData.type){
            case 1:
                if(Date.parse(new Date()) >= Date.parse(new Date("October 9,2017 0:0:0")) || Date.parse(new Date()) < Date.parse(new Date("October 1,2017 0:0:0"))){
                    return {code:ReturnCode.illegalData};
                }
                if(!user.baseMgr.info.CheckStatus(UserStatus.isGetNinjaGift)){
                    user.baseMgr.info.SetStatus(UserStatus.isGetNinjaGift);
                    bonus = this.core.fileMap.vip.NinjaGift;
                    user.getBonus(bonus);
                    return {code:ReturnCode.Success,data:{bonus:bonus}};
                }
                else {
                    return {code:ReturnCode.taskBonusHasGot};
                }
                break;
            case 2:
                if(Date.parse(new Date()) >= Date.parse(new Date("October 9,2017 0:0:0")) || Date.parse(new Date()) < Date.parse(new Date("October 1,2017 0:0:0"))){
                    return {code:ReturnCode.illegalData};
                }
                bonus = user.baseMgr.task.getBonus("1055");
                if(bonus != '-1' && bonus != '-2'){
                    return {code:ReturnCode.Success,data:{bonus:[{type: ResType.PetChipHead,id:33,num:55}]}};
                }
                else {
                    return {code:ReturnCode.taskNotFinished};
                }
                break;
            case 3:
                if(Date.parse(new Date()) >= Date.parse(new Date("October 9,2017 0:0:0")) || Date.parse(new Date()) < Date.parse(new Date("October 1,2017 0:0:0"))){
                    return {code:ReturnCode.illegalData};
                }
                if(!!user.baseMgr.item.GetRes(ResType.Role, 31) && user.baseMgr.item.GetRes(ResType.Role,31).lv >= 3){
                    if(!user.baseMgr.info.CheckStatus(UserStatus.isGetNarutoGift)){
                        user.baseMgr.info.SetStatus(UserStatus.isGetNarutoGift);
                        bonus = [{type: ResType.PetChipHead,id:32,num:30}];
                        user.getBonus(bonus);
                        return {code:ReturnCode.Success,data:{bonus:bonus}};
                    }
                    else {
                        return {code:ReturnCode.taskBonusHasGot};
                    }
                }
                else {
                    return {code:ReturnCode.taskNotFinished};
                }
                break;
            default:
                return {code:ReturnCode.illegalData};
                break;
        }
    }

    sceneShare(user,objData){
        if(typeof objData.type != "number"){
            objData.type = parseInt(objData.type);
        }
        let bonus = null;
        switch(objData.type){
            case 1:
                bonus = [{type: ResType.Diamond, num:50}];
                user.getBonus(bonus);
                user.notify({type: NotifyType.sceneShare, info: {bonus:bonus}});
                return {code:ReturnCode.Success};
                break;
            default:
                return {code:ReturnCode.illegalData};
                break;
        }
    }
    /**
     * 用户客户端获取服务端时间戳
     * @param {*} user 
     */
    getTime(user){
        return {code:ReturnCode.Success,data:{time:Date.parse(new Date())/1000}};
    }
}

exports = module.exports = index;
