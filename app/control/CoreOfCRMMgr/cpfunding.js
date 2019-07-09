let facade = require('gamecloud')
let { EntityType, ReturnCode, NotifyType, TableType } = facade.const

/**
 * 游戏的控制器
 * Updated by thomasFuzhou on 2018-11-19.
 */
class cpfunding extends facade.Control {
    /**
     * 删除记录
     * @param {*} user 
     * @param {*} objData 
     */
    async DeleteRecord(user, objData) {
        try {
            this.core.GetMapping(TableType.CpFunding).Delete(objData.id, true);
            return { code: ReturnCode.Success, data: null };
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, message: "cpfunding.DeleteRecord方法出错" };
        }
    }
    /**
     * 修改数据库记录
     * @param {*} user 
     * @param {*} objData 
     */
    async UpdateRecord(user, objData) {
        try {
            console.log("46:更新数据",objData.id);
            let cpfunding = this.core.GetObject(TableType.CpFunding, parseInt(objData.id));
            if (!!cpfunding) {
                console.log(49);
                //需要针对各个属性增加为null的判断；如果为null的情况下，则
                cpfunding.setAttr('cpid', objData.cpid);
                cpfunding.setAttr('stock_num', objData.stock_num);
                cpfunding.setAttr('total_amount', objData.total_amount);
                cpfunding.setAttr('stock_amount', objData.stock_amount);
                cpfunding.setAttr('stock_rmb', objData.stock_rmb);
                cpfunding.setAttr('audit_state_id', objData.audit_state_id);
                cpfunding.setAttr('audit_text', objData.audit_text);
                cpfunding.setAttr('modify_date', objData.modify_date);
                cpfunding.setAttr('cp_name', objData.cp_name);
                cpfunding.setAttr('cp_text', objData.cp_text);
                cpfunding.setAttr('cp_type', objData.cp_type);
                cpfunding.setAttr('cp_url', objData.cp_url);
                cpfunding.setAttr('develop_name', objData.develop_name);
                cpfunding.setAttr('develop_text', objData.develop_text);
                cpfunding.setAttr('user_id', objData.user_id);
                cpfunding.setAttr('cid', objData.cid);
                cpfunding.setAttr('operator_id', user.id);
                cpfunding.Save();
                return { code: ReturnCode.Success };
            }
            return { code: -2, data: null,message:"找不到记录" };
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, message: "cp.UpdateRecord方法出错" };
        }
    }
    /**
     * 此方法暂时给众筹详情页的列表使用
     * @param {*} user 
     * @param {*} paramGold cid 唯一参数
     */
    async StockRecord(user, paramGold) {
        try {
            console.log("cpfunding.StockRecord参数串：");
            let paramArray = paramGold.items;
            if (typeof (paramArray) == "string") {
                paramArray = JSON.parse(paramArray);
            }
            console.log("paramArray:",paramArray);
            let ret = await this.core.service.RemoteNode.conn(user.domainId).execute('stock.record', paramArray);
            return { code: ret.code, data: ret.result };
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, message: "cpfunding.StockRecord方法出错" };
        }

    }

    /**
     * 众筹申请访问区块链的部分
     * @param {*} user 
     * @param {*} paramGold 其中的成员 items 是传递给区块链全节点的参数数组
     */
    async Create(user, paramGold) {
        try {
            console.log("cpfunding.Create参数串：");
            let cid=paramGold.cid;
            let stock_num=parseInt(paramGold.stock_num);
            let stock_amount=parseInt(paramGold.stock_amount);
            //获取operator
            let operator = this.core.GetObject(EntityType.User, user.id);
            
            let paramArray = [cid,stock_num,stock_amount, operator.baseMgr.info.getAttr('cid')];
            let ret = await this.core.service.RemoteNode.conn(user.domainId).execute('stock.offer', paramArray);
            return { code: ret.code, data: ret.result };
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, message: "cpfunding.Create方法出错" };
        }

    }
    /**
     * 增加数据库记录。此方法被从页面入口的Create方法所调用
     * 众筹申请写数据库的部分
     * @param {*} user 
     * @param {*} objData 
     */
    async CreateRecord(user, objData) {
        try {
           
            let cpfunding = await this.core.GetMapping(TableType.CpFunding).Create(
                objData.cpid,
                objData.stock_num,
                objData.total_amount,
                objData.stock_amount,
                objData.stock_rmb,
                objData.audit_state_id,
                objData.audit_text,
                objData.modify_date,
                objData.cp_name,
                objData.cp_text,
                objData.cp_type,
                objData.cp_url,
                objData.develop_name,
                objData.develop_text,
                objData.userinfo.id,
                objData.cid,
                user.id,
            );
            let ret = { code: ReturnCode.Success, data: null, message: "cpfunding.CreateRecord成功" };
            console.log(ret);
            return ret;
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, message: "cpfunding.CreateRecord方法出错" };
        }

    }

    /**
     * 查看单个记录
     * @param {*} user 
     * @param {*} objData 
     */
    async Retrieve(user, objData) {
        console.log(158,objData.id);
        try {
            let cpfunding = this.core.GetObject(TableType.CpFunding, parseInt(objData.id));
            if (!!cpfunding) {
                // console.log(162,"有数据啊");
                // console.log(cpfunding.getAttr('cpid'));
                return {
                    code: ReturnCode.Success,
                    data: {
                        id: parseInt(objData.id),
                        cpid: cpfunding.getAttr('cpid'),
                        stock_num: cpfunding.getAttr('stock_num'),
                        total_amount: cpfunding.getAttr('total_amount'),
                        stock_amount: cpfunding.getAttr('stock_amount'),
                        stock_rmb: cpfunding.getAttr('stock_rmb'),
                        audit_state_id: cpfunding.getAttr('audit_state_id'),
                        audit_text: cpfunding.getAttr('audit_text'),
                        modify_date: cpfunding.getAttr('modify_date'),
                        cp_name: cpfunding.getAttr('cp_name'),
                        cp_text: cpfunding.getAttr('cp_text'),
                        cp_type: cpfunding.getAttr('cp_type'),
                        cp_url: cpfunding.getAttr('cp_url'),
                        develop_name: cpfunding.getAttr('develop_name'),
                        develop_text: cpfunding.getAttr('develop_text'),
                        user_id: cpfunding.getAttr('user_id'),
                        cid: cpfunding.getAttr("cid"),
                        operator_id: cpfunding.getAttr("operator_id"),
                        sell_limit_date:cpfunding.getAttr('modify_date')+3600*24*14
                    },

                };
            }
            else {
                return { code: -2, data: null, message: "该cpfunding不存在" };
            }
        } catch (error) {
            console.log(error);
            return { code: -1, data: null, message: "cpfunding.Retrieve方法出错" };
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
            // console.log(Number.isNaN(parseInt(currentPage)));
            if (Number.isNaN(parseInt(currentPage))) {
                currentPage = 1;
            }

            //构造查询条件
            let paramArray = [];
            if (!!objData.cp_text) {
                paramArray.push(['cp_text', objData.cp_text]);
            }
            if (!!objData.audit_state_id) {
                paramArray.push(['audit_state_id', objData.audit_state_id]);
            }

            //得到 Mapping 对象
            let muster = this.core.GetMapping(TableType.CpFunding)
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
            for (let $value of muster.records(['id', 'cpid', 'stock_num', 'total_amount', 'stock_amount', 'stock_rmb', 'audit_state_id', 'audit_text', 'modify_date', 'cp_name', 'cp_text', 'cp_type', 'cp_url', 'develop_name', 'develop_text', 'user_id', 'cid', 'operator_id'])) {
                $data.items[$idx] = $value;
                $value['sell_limit_date'] = $value['modify_date'] + 3600*24*14;
                $value['rank'] = $idx++;
            }

            //转化并设置数组属性
            $data.list = Object.keys($data.items).map(key => $data.items[key]);

            return $data;
        } catch (error) {
            console.log(error);
            return { items: {}, list: [], pagination: {} };
        }
    }

    /**
     * 从数据库中获取Cp。用于在客户端显示所有数据库中的cp用于查询
     * 客户端直接调用此方法
     * @param {*} user 
     * @param {*} objData 无需参数。
     */
    ListCp(user, objData) {
        try {
            //得到 Mapping 对象
            let muster = this.core.GetMapping(TableType.Cp)
                .groupOf() // 将 Mapping 对象转化为 Collection 对象，如果 Mapping 对象支持分组，可以带分组参数调用
                .orderby('id', 'asc') //根据id字段倒叙排列
                .paginate(10, 1); 

            let $data=[];
            for (let $value of muster.records(['id', 'cp_id', 'cp_text'])) {
                let item = { id: $value['id'], cp_id: $value['cp_id'], cp_text: $value['cp_text']};
                $data.push(item);
            }
            return $data;

        } catch (error) {
            console.log(error);
            return null;
        }
    }
}

exports = module.exports = cpfunding;
