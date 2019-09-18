let facade = require('gamecloud')
let baseMgr = facade.Assistant
let {em_Effect_Comm, ReturnCode, EventEnum, EventConfig} = facade.const
let GateEvent = facade.Util.GateEvent

class randomEvent extends baseMgr
{
    constructor(parent){
        super(parent, 'login', 200);
    }

    /**
     * 获取事件列表
     * @return array
     */
    getList(){
        for(let $key in this.v){
            let $val = this.v[$key];
            if($val.expiredTime > 0 && $val.expiredTime < facade.util.now()){ //清除过期事件
                delete this.v[$val.type];
                this.dirty = true;
            }
        }

        return this.v;
    }

    /**
     * @param IUser $user 用户
     * @param int $eid 事件ID
     * @return array 结果集
     */
    ExecuteResult($user, $eid) {
        if(!!this.v[$eid]){
            let $ret = this.v[$eid].Execute($user);
            if($ret['result'] == 0){
                switch($eid){
                    case EventEnum.BossAppear: //转化为新事件
                    {
                        delete this.v[$eid];
                        let $newId = (Math.random()*100 | 0) < 50 ? EventEnum.BossAttack : EventEnum.BossStoneAttack; //是金币宝箱怪还是魂石宝箱怪
                        let $newEvent = new GateEvent($newId);
                        let $config = EventConfig.getEvents();
                        if($config[$newId]['expired'] > 0){
                            $newEvent.expiredTime = facade.util.now() + $config[$newId]['expired'];
                        }
                        else{
                            $newEvent.expiredTime = 0;
                        }
                        this.addEvent($newEvent);
                        break;
                    }

                    case EventEnum.BossStoneAttack:
                    case EventEnum.BossAttack:
                    case EventEnum.Enemy:
                    case EventEnum.Rabbit: //消除
                    {
                        delete this.v[$eid];
                        break;
                    }
                }
            }
            return $ret;
        }
        else{
            return {'result': ReturnCode.paramError};
        }
    }

    /**
     * 添加或者替换事件
     * @param {GateEvent} $ev
     */
    addEvent($ev)
    {
        this.dirty = true;
        this.v[$ev.type] = $ev;
    }

    /**
     * 产生随机事件，采用监视器模式，针对所有在线用户定时产生
     * @param {UserEntity} $user
     */
    RandomEvent($user) {
        if(Object.keys(this.v).length == 0){
            let $recy = true;
            let $config = EventConfig.getEvents();
            while($recy){//一直抽取出允许随机出现的事件为止。某些事件只能转化而来，不允许直接抽取
                let $_type = 0;
                if((Math.random()*100|0) < 100 * $user.effect().CalcFinallyValue(em_Effect_Comm.BoxRate, 0.2)){ //测试宝箱怪出现概率
                    $_type = EventEnum.BossAppear;
                }
                else{
                    $_type = EventEnum[Object.keys(EventEnum).randomElement()[0]];
                }

                if($config[$_type]['random'] == false || $_type == EventEnum.Enemy){//暂时屏蔽PVP
                    continue;
                }

                $recy = false;
                if(!this.v[$_type]){//规定事件不能重入
                    if($config[$_type]['action'] == 0 || $user.getActionMgr().Execute($config[$_type]['action'], 1)){
                        let $event = new GateEvent($_type);
                        if($config[$_type]['action'] > 0){
                            $config[$_type]['action'] == 0 || $user.getActionMgr().Execute($config[$_type]['action'], 1, true);
                            $event.numOfCur = $user.getActionMgr().GetExecuteNum($config[$_type]['action']);
                            $event.numOfMax = $user.getActionMgr().GetExecuteNum($config[$_type]['action']) + $user.getActionMgr().GetLeftNum($config[$_type]['action']);
                        }
                        else{
                            $event.numOfCur = 0;
                            $event.numOfMax = 0;
                        }
                        this.addEvent($event);
                    }
                }
            }
        }
    }
}

exports = module.exports = randomEvent;
