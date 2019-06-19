/**
 * Created by Administrator on 2017-03-21.
 */

const facade = require('gamecloud');
let {Sequelize, seqconn} = facade.tools;

//建立数据库ORM模型
let CpUser = (db) => seqconn.seqConnector(db.db, db.sa, db.pwd, db.host, db.port).define(
    'CpUser',
    {
        openid: Sequelize.STRING,
        addr: Sequelize.STRING,
        nick: Sequelize.STRING,
        avatar_uri: Sequelize.STRING,
        created_at: Sequelize.BIGINT
    },
    {
        'timestamps': false,    // 是否需要增加createdAt、updatedAt、deletedAt字段
        'tableName': 'our_block_cp_user',    // 实际使用的表名
        'paranoid': false       // true表示删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    }
);
exports.CpUser = CpUser;
