let facade = require('gamecloud')
let {EntityType} = facade.const
let BaseEntity = facade.BaseEntity
let {CpStock} = require('../table/CpStock')

class CpStockEntity extends BaseEntity
{
    //region 集合功能

    /**
     * 为 Mapping 映射进行参数配置
     */
    static get mapParams() {
        return {
            etype: EntityType.CpStock,    //表类型
            model: CpStock,                    //表映射类
            entity: CpStockEntity,             //ORM映射类
        };
    }

    /**
     * 创建记录时的钩子函数
     */
    static async onCreate(db, cid,cp_name,cp_text,stock_day,stock_open,stock_close,stock_high,stock_low,total_num,total_amount) {
        try{
            let it = await CpStock(db).create({
                'cid': cid,
                'cp_name': cp_name,
                'cp_text': cp_text,
                'stock_day': stock_day,
                'stock_open': stock_open,
                'stock_close': stock_close,
                'stock_high': stock_high,
                'stock_low': stock_low,
                'total_num': total_num,
                'total_amount': total_amount,
            });
            await it.save();
    
            return it;
        }
        catch(e){
            console.error(e);
        }
        return null;
    }

    /**
     * 进行字典映射时的钩子函数
     * @param {*} record 
     */
    static onMapping(record, core){
        return new CpStockEntity(record, core);
    }

    /**
     * 载入数据库记录时的钩子函数
     * @param {*} db 
     * @param {*} callback 
     */
    static async onLoad(db, callback){
        try {
            let ret = await CpStock(db).findAll();
            ret.map(it=>{
                callback(it);
            });
        } catch(e) {}
    }

    //endregion
}

exports = module.exports = CpStockEntity;
