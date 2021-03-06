let facade = require('gamecloud');
let {EntityType} = facade.const;
let BaseEntity = facade.BaseEntity
let {RedPacket} = require('../table/RedPacket')

class RedPacketEntity extends BaseEntity
{
    //region 集合功能

    /**
     * 为 Mapping 映射进行参数配置
     */
    static get mapParams() {
        return {
            etype: EntityType.RedPacket,    //表类型
            model: RedPacket,                    //表映射类
            entity: RedPacketEntity,             //ORM映射类
        };
    }

    /**
     * 创建记录时的钩子函数
     */
    static async onCreate(db, act_name,act_sequence,total_gamegold,each_gamegold,total_num,each_num,act_desc,act_start_at,act_end_at) {
        try{
            let it = await RedPacket(db).create({
                'act_name': act_name,
                'act_sequence': act_sequence,
                'total_gamegold': total_gamegold,
                'each_gamegold': each_gamegold,
                'total_num': total_num,
                'each_num': each_num,
                'act_desc': act_desc,
                'act_start_at': act_start_at,
                'act_end_at': act_end_at,
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
    static onMapping(record, core) {
        return new RedPacketEntity(record, core);
    }

    /**
     * 载入数据库记录时的钩子函数
     * @param {*} db 
     * @param {*} callback 
     */
    static async onLoad(db, callback){
        try {
            let ret = await RedPacket(db).findAll();
            ret.map(it=>{
                callback(it);
            });
        } catch(e) {}
    }

    //endregion
}

exports = module.exports = RedPacketEntity;
