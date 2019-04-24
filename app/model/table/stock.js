/**
 * Created by Administrator on 2017-03-21.
 */

const facade = require('gamecloud');
let {Sequelize, seqconn} = facade.tools;

//建立数据库ORM模型
let Stock = (db, sa, pwd) => seqconn.seqConnector(db, sa, pwd).define(
    'Stock',
    {
        cid: Sequelize.STRING,
        cname: Sequelize.STRING,
        totality: Sequelize.INTEGER,
        remainder: Sequelize.INTEGER,
        price: Sequelize.INTEGER,
        gold: Sequelize.INTEGER,
        title: Sequelize.STRING,
        pic: Sequelize.STRING,
        item_pic: Sequelize.STRING,
        desc: Sequelize.STRING,
        status: Sequelize.INTEGER,
        support: Sequelize.INTEGER,
    },
    {
        'timestamps': false,    // 是否需要增加createdAt、updatedAt、deletedAt字段
        'tableName': 'our_block_stock',    // 实际使用的表名
        'paranoid': false       // true表示删除数据时不会进行物理删除，而是设置deletedAt为当前时间
    }
);
exports.Stock = Stock;
