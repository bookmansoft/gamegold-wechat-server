let facade = require('gamecloud')
let { ReturnCode, EntityType, TableField } = facade.const

/**
 * 游戏的控制器
 * Updated on 2018-11-19.
 */
class redpacket extends facade.Control {
    /**
     * 删除记录
     * @param {*} user 
     * @param {*} objData 
     */
    DeleteRecord(user, objData) {
        try {
            this.core.GetMapping(EntityType.RedPacket).Delete(objData.id, true);
            return { code: ReturnCode.Success };
        } catch (error) {
            console.log(error);
            return { code: -1, msg: "redpacket.DeleteRecord方法出错" };
        }

    }
    /**
     * 修改数据库记录
     * @param {*} user 
     * @param {*} objData 
     */
    UpdateRecord(user, objData) {
        try {
            console.log(JSON.stringify(objData));
            console.log(objData.id);
            let redpacket = this.core.GetObject(EntityType.RedPacket, parseInt(objData.id));
            if (!!redpacket) {
                //需要针对各个属性增加为null的判断；如果为null的情况下，则
                redpacket.setAttrs([
                    ['act_name', objData.act_name],
                    ['act_sequence', objData.act_sequence],
                    ['total_gamegold', parseInt(objData.total_gamegold)],
                    ['each_gamegold', parseInt(objData.each_gamegold)],
                    ['total_num', parseInt(objData.total_num)],
                    ['each_num', parseInt(objData.each_num)],
                    ['act_desc', objData.act_desc],
                    ['act_start_at', parseInt(objData.act_start_at)],
                    ['act_end_at', parseInt(objData.act_end_at)],
                ]);
                return { code: ReturnCode.Success };
            }
            return { code: -1 };
        } catch (error) {
            console.log(error);
            return { code: -1, msg: "redpacket.UpdateRecord方法出错" };
        }

    }
    /**
     * 增加数据库记录。
     * 此方法被从页面入口的Create方法所调用
     * @param {*} user 
     * @param {*} objData 
     */
    async CreateRecord(user, objData) {
        try {

            let redpacket = await this.core.GetMapping(EntityType.RedPacket).Create(
                objData.act_name,
                objData.act_sequence,
                objData.total_gamegold,
                objData.each_gamegold,
                objData.total_num,
                objData.each_num,
                objData.act_desc,
                objData.act_start_at,
                objData.act_end_at,
            );
            // console.log("执行创建成功了吗？");
            if (redpacket == null) {
                return { code: -1, msg: "违反唯一性约束" }
            }
            else {
                return { code: 0, data: null };
            }
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, msg: "redpacket.CreateRecord方法出错" };
        }
    }

    /**
     * 查看单个记录
     * @param {*} user 
     * @param {*} objData 
     */
    Retrieve(user, objData) {
        try {
            //根据上行id查找test表中记录, 注意在 get 方式时 id 不会自动由字符串转换为整型
            let redpacket = this.core.GetObject(EntityType.RedPacket, parseInt(objData.id));
            console.log(redpacket);
            if (!!redpacket) {
                return {
                    code: ReturnCode.Success,
                    data: {
                        act_name: redpacket.getAttr('act_name'),
                        act_sequence: redpacket.getAttr('act_sequence'),
                        total_gamegold: redpacket.getAttr('total_gamegold'),
                        each_gamegold: redpacket.getAttr('each_gamegold'),
                        total_num: redpacket.getAttr('total_num'),
                        each_num: redpacket.getAttr('each_num'),
                        act_desc: redpacket.getAttr('act_desc'),
                        act_start_at: redpacket.getAttr('act_start_at'),
                        act_end_at: redpacket.getAttr('act_end_at'),

                    },

                };
            }
            return { code: -1, data: null };
        } catch (error) {
            console.log(error);
            return { code: -1, msg: "redpacket.Retrieve方法出错" };
        }
    }


    /**
     * 从数据库中获取列表
     * 客户端直接调用此方法
     * @param {*} user 
     * @param {*} objData 查询及翻页参数，等整体调通以后再细化。
     */
    ListRecord(user, objData) {
        try {
            if (objData == null) {
                objData = {};
            }
            let currentPage = objData.currentPage;
            console.log(Number.isNaN(parseInt(currentPage)));
            if (Number.isNaN(parseInt(currentPage))) {
                currentPage = 1;
            }

            //构造查询条件
            //id=3
            let paramArray = new Array();
            if (typeof (objData.id) != "undefined" && (objData.id != "")) {
                console.log(`id 参数: ${objData.id}`);
                let tmp = ['id', '==', objData.id];
                paramArray.push(tmp);
            }

            console.log(paramArray);
            //得到 Mapping 对象
            let muster = this.core.GetMapping(EntityType.RedPacket)
                .groupOf() // 将 Mapping 对象转化为 Collection 对象，如果 Mapping 对象支持分组，可以带分组参数调用
                .where(paramArray)
                .orderby('id', 'desc') //根据id字段倒叙排列
                .paginate(10, currentPage); 

            let $data = { items: {}, list: [], pagination: {} };
            //扩展分页器对象
            $data.pagination = { "total": muster.pageNum * 10, "pageSize": 10, "current": muster.pageCur };
            $data.total = muster.pageNum;
            $data.page = muster.pageCur;

            let $idx = (muster.pageCur - 1) * muster.pageSize;
            $idx = $idx + 5;
            for (let $value of muster.records(TableField.RedPacket)) {
                $data.items[$idx] = $value;
                $value['rank'] = $idx++;
            }

            //转化并设置数组属性
            $data.list = Object.keys($data.items).map(key => $data.items[key]);
            return $data;
        } catch (error) {
            console.log(error);
            return { code: -1, msg: "redpacket.ListRecord方法出错" };
        }
    }
}

exports = module.exports = redpacket;
