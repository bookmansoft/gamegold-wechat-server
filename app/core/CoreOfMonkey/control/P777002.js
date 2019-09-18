let facade = require('gamecloud')
let {EntityType, AllySetting, em_Ally_Oper, ReturnCode} = facade.const

/**
 * 联盟管理
 */
class P777002 extends facade.Control 
{
    /**
     * @brief  报文编号 777001
     *
     * @date   2016.10.12
     *
     * @param {UserEntity} user
     * @param  :
     * 名称        | 类型     | 描述
     * ------------|----------|--------------------
     * oper        | int      | 操作类型 1查询列表 2查询指定用户
     * id          | int      | 指定用户ID
     * page        | int      | 指定查询页码
     *
     * @return
     * 名称        | 类型     | 描述
     * ------------|----------|----------------------
     * code        | int      | 返回码
     * data        | object   | 返回的数值对象
     * .rank       | int      | 自身排名
     * .items      | array    | 前50名玩家列表
     *
     * @note
     */
    async Execute(user, objData) {
        objData.oper = parseInt(objData.oper);
        objData.id = parseInt(objData.id);

        let $data = new D777002();
        let $code = ReturnCode.Success;
        switch(objData.oper){
            case em_Ally_Oper.find:
                $ally = this.core.GetObject(EntityType.Ally, objData.id);
                if($ally != null){
                    $data.ally = $ally;
                    this.GetRanks($ally, user, $data);
                }
                break;

            case em_Ally_Oper.quit:
                $aid = user['aid'];
                if($aid <= 0){
                    $code = ReturnCode.AllyNotExist;
                }
                else{
                    $ao.DelMember(user, objData.id);
                }
                break;
        }

        return {code:$code, data: $data};
    }

    GetRanks($ao, user, $data){
        let $page_max = $ao.GetPagesOfMember();
        let $page = Math.max(1, Math.min(parseInt(objData.page), $page_max));
        $data.page = $ao.GetPageOfMemberWithUid($page, user['id'], $data.items);
        $data.total = $page_max;
    }
}

/**
 * 返回报文 Class D777002
 */
class D777002
{
    constructor(){
        /**
         * 联盟信息
         * @var
         */
        this.ally = {};
        /**
         * 前50名用户排序，包含id, name, rank
         * @var array
         */
        this.items = [];
        /**
         * 页数
         * @var int
         */
        this.total = 0;
        /**
         * 页码
         * @var int
         */
        this.page = 1;
    }
}

exports = module.exports = P777002;
