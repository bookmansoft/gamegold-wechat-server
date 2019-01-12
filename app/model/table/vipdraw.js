/**
 * Created by Administrator on 2017-03-21.
 */

const facade = require('gamecloud');
let {Sequelize, seqconn} = facade.tools;

//建立数据库ORM模型
let VipDraw = (db, sa, pwd) => seqconn.seqConnector(db, sa, pwd).define(
    'VipDraw',
    {
        uid: Sequelize.INTEGER,
        draw_count: Sequelize.INTEGER,
        remainder: Sequelize.INTEGER,
        draw_at: Sequelize.INTEGER,
    },
    {
        'timestamps': false,    // 是否需要增加createdAt、updatedAt、deletedAt字段
        'tableName': 'our_block_vip_draw_gold',    // 实际使用的表名
        'paranoid': false       // true表示删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    }
);
exports.VipDraw = VipDraw;
