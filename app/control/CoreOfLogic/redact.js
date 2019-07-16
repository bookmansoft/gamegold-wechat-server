let facade = require('gamecloud');
let {TableType} = facade.const;
let tableField = require('../../util/tablefield');
const stringRandom = require('string-random');
let wechatcfg = facade.ini.servers["Index"][1].wechat; //全节点配置信息

/**
 * 管理后台
 */
class manage extends facade.Control
{
    //活动列表
    async RedPackActCurrent(user, params) {
        let redpackActList = await this.core.GetMapping(TableType.RedPackAct).groupOf().where([['status', '==', 1]]).records(tableField.RedPackAct)
        if(redpackActList.length >0 ) {
            let redPacetAct = redpackActList[0]
            return {errcode: 'success', data: redPacetAct}    
        }
        return {errcode: 'error', errmsg: '无红包活动'}
    }

    //用户红包汇中
    async UserRedPackAct(user, params) {
        let uid = user.id
        let act_id = params.act_id
        let userRedPactActs = await this.core.GetMapping(TableType.UserRedPackAct).groupOf()
            .where([
                ['uid', '==', uid],
                ['act_id', '==', act_id]
            ]).records(tableField.UserRedPackAct);
        if(userRedPactActs.length > 0 ) {
            return {errcode: 'success', data: userRedPactActs[0]};
        }
        return {errcode: 'error', errmsg: '未参与红包活动'}
    }

    //用户红包记录
    async UserRedPack(user, params) {
        let uid = user.id
        let act_id = params.act_id
        let userRedPacts = await this.core.GetMapping(TableType.UserRedPack).groupOf()
            .where([
                ['uid', '==', uid],
                ['act_id', '==', act_id]
            ]).records(tableField.userRedpack)
        if(userRedPacts.length >0 ) {
            return {errcode: 'success', data: userRedPacts}    
        }
        return {errcode: 'error', errmsg: '无红包参与记录'}
    }

    //用户抽中红包
    async UserRedPackAdd(user, params)  {
        let uid = user.id
        let act_id = params.act_id
        let act_name = params.act_name
        let gamegold = params.gamegold
        let amount = params.amount

        let redpackAct = this.core.GetObject(TableType.RedPackAct, act_id); 
        if(!!!redpackAct ) {
            return {errcode: 'fail', errmsg: '无红包活动'}    
        }

        let current_time = parseInt(new Date().getTime() / 1000)

        let userRedpackItem = {
            uid: uid,
            act_id: act_id,
            act_name: act_name,
            gamegold: gamegold,
            amount: amount,
            act_at: current_time,
            cid: redpackAct.orm.cid,
            status: 0
        }
        await this.core.GetMapping(TableType.UserRedPack).Create(userRedpackItem)

        let userRedPactActs = await this.core.GetMapping(TableType.UserRedPackAct).groupOf()
        .where([
            ['uid', '==', uid],
            ['act_id', '==', act_id]
        ]).records()

        if(userRedPactActs.length >0 ) {
            let userRedPactAct = userRedPactActs[0]
            userRedPactAct.setAttr('act_count', userRedPactAct.orm.act_count+1);
            userRedPactAct.setAttr('amount_all', userRedPactAct.orm.amount_all+amount);
            userRedPactAct.setAttr('last_act_at', current_time);
            userRedPactAct.orm.save()
        } else {
            let userRedpackActItem = {
                uid: uid,
                act_id: act_id,
                act_name: act_name,
                act_count: 1,
                amount_all: amount,
                last_act_at: current_time
            }
            await this.core.GetMapping(TableType.UserRedPackAct).Create(userRedpackActItem)
        }
        return {errcode: 'success'}
        
    };

    //用户红包发送
    async UserRedPackSend(user, params)  {
        let id = params.id
        let uid = user.id
        let act_id = params.act_id
        let openid = params.openid
        let userRedPact = this.core.GetObject(TableType.UserRedPack, id);     //根据上行id查找userRedPact表中记录
        if( !!userRedPact ) {
            
            if(userRedPact.orm.status != 0) {
                return {errcode: 'error', errmsg: '红包已领取'}
            }

            /*
            let amount = userRedPact.orm.amount
            let now = new Date();
            let date_time = now.getFullYear() + '' + (now.getMonth() + 1) + '' + now.getDate();
            let date_no = (now.getTime() + '').substr(-8); //生成8为日期数据，精确到毫秒
            let random_no = Math.floor(Math.random() * 99);
            if (random_no < 10) { //生成位数为2的随机码
                random_no = '0' + random_no;
            }
    
            let redPackConfig = {
                showName: '游戏金',
                clientIp: params.userip,
                wishing: '新年快乐，大吉大利',
                remark: '分享越多，快乐越多，游戏金越多',
                mch_billno: wechatcfg.mch_id + date_time + date_no + random_no //订单号为 mch_id + yyyymmdd+10位一天内不能重复的数字;
            }

            let total_amount = amount
            let total_num = 1
            let ret = await this.core.service.wechat.sendRedPacket(total_amount, total_num, openid, redPackConfig)
            let redpackItem = {
                user_redpack_id
                uid
                act_id
                act_name: redPackConfig.showName,
                mch_billno: redPackConfig.mch_billno,
                nick_name: redPackConfig.showName,
                re_openid: openid,
                remark: redPackConfig.remark,
                send_name: redPackConfig.showName,
                total_amount: total_amount,
                total_num: total_num,
                wishing: redPackConfig.wishing,
                return_msg: ret.return_msg,
                order_status: 0,
            }
            
            this.core.GetMapping(TableType.RedPack).Create(redpackItem);
            */
           let cid = userRedPact.orm.cid
           let sn = stringRandom(32)

            userRedPact.setAttr('status', 1)
            userRedPact.setAttr('order_sn', sn)
            userRedPact.setAttr('cid', cid)
            userRedPact.orm.save()

            //发送游戏金
            await this.core.service.gamegoldHelper.orderPay(cid, uid, sn, userRedPact.orm.gamegold, uid)

            return {errcode: 'success'}

        } else {
            return {errcode: 'error'}
        }
        
    };

}

exports = module.exports = manage;
