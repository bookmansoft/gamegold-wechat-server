let facade = require('gamecloud')
let {EntityType, IndexType} = facade.const
let BaseEntity = facade.BaseEntity
let {StockBulletin} = require('../table/StockBulletin')

class StockBulletinEntity extends BaseEntity
{
    //region 集合功能

    /**
     * 为 Mapping 映射进行参数配置
     */
    static get mapParams() {
        return {
            etype: EntityType.StockBulletin,          //表类型
            model: StockBulletin,                    //表映射类
            entity: StockBulletinEntity,             //ORM映射类
            group: 'cid',                            //分组键
        };
    }

    IndexOf(type){
        switch(type){
            case IndexType.Domain:
                return `${this.orm.cid}-${this.orm.stock_day}`;
            default:
                return this.orm.id;
        }
    }

    /**
     * 创建记录时的钩子函数
     */
    static async onCreate(db, item) {
        try{
            let it = await StockBulletin(db).create(item);
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
    static onMapping(record, core) {
        return new StockBulletinEntity(record, core);
    }

    /**
     * 载入数据库记录时的钩子函数
     * @param {*} db 
     * @param {*} callback 
     */
    static async onLoad(db, callback) {
        try {
            let ret = await StockBulletin(db).findAll();
            ret.map(it=>{
                callback(it);
            });
        } catch(e) {}
    }

    //endregion
}

exports = module.exports = StockBulletinEntity;
