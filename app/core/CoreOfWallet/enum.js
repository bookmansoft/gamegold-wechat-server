let blockgame = ['id','game_title','small_img_url','game_resource_uri','game_ico_uri','game_link_url','game_desc','sort','category_id',
    'category_title','provider_id','provider_name','ad_title','ranking','star_level','down_count','comment_count',
    'create_time','update_time','store_status','game_version', 'stock_price', 'stock_sum', 'grate', 'hHeight', 'hBonus', 'hAds',
    'developer','update_desc','game_screenshots','player_count','cpid','cpurl','cp_addr','cp_name'
];

let userwallet = [
    'id',
    'cid',
    'uid',
    'addr',
    'pubkey',
    'time',
    'sig',
];

let redpack = [
    'user_redpack_id',
    'uid',
    'act_id',
    'act_name',
    'mch_billno',
    'nick_name',
    're_openid',
    'remark',
    'send_name',
    'total_amount',
    'total_num',
    'wishing',
    'return_msg',
    'order_status'
]

let redpackact = [
    'id',
    'act_name',
    'act_sequence',
    'total_gamegold',
    'each_gamegold',
    'total_num',
    'each_num',
    'act_desc',
    'act_start_at',
    'act_end_at',
    'cid',
    'status'
]

let userredpack = [
    'id',
    'uid',
    'act_id',
    'act_name',
    'gamegold',
    'amount',
    'act_at',
    'status',
    'order_sn',
    'cid'
]

let userredpackact = [
    'id',
    'uid',
    'act_id',
    'act_name',
    'act_count',
    'amount_all',
    'last_act_at',
]

let blockgamecomment = [
    'id',
    'cid',
    'reply_id',
    'uid',
    'nick',
    'avatar_url',
    'ip',
    'resp_count',
    'point_up_count',
    'create_at',
    'title',
    'content',
]

let stock = [
    'id',
    'cid',
    'cname',
    'totality',
    'remainder',
    'price',
    'gold',
    'title',
    'pic',
    'item_pic',
    'desc',
    'status',
    'support'
]

let StockBase = [
    'id', 'cid', 'funding_text','funding_project_text', 'supply_people_num', 'height', 'sum', 'sum_left', 'price', 'history_text','now_sale'
]

let CpFunding = ['id', 'stock_num', 'total_amount', 'stock_amount', 'stock_rmb', 'audit_state_id', 'audit_text', 'modify_date', 'cp_name', 'cp_text', 'cp_type', 'cp_url', 'develop_name', 'develop_text', 'user_id', 'cid', 'operator_id']

let CpStock = ['id', 'cid', 'cp_name', 'cp_text', 'stock_day', 'stock_open', 'stock_close', 'stock_high', 'stock_low', 'total_num', 'total_amount']

let RedPacket = ['id', 'act_name', 'act_sequence', 'total_gamegold', 'each_gamegold', 'total_num', 'each_num', 'act_desc', 'act_start_at']

let StockBulletin = ['id', 'cid', 'stock_day', 'stock_open', 'stock_close', 'stock_high', 'stock_low', 'total_num', 'total_amount', 'sum', 'bonus', 'price']

let Mail = ['id', 'src', 'dst', 'content', 'time', 'state', 'sn']

let sharedredpack = ['id', 'total_amount', 'total_num', 'send_uid', 'wishing', 'modify_date', 'state_id', 'hash'];
let sharedredpack_receive = ['id', 'send_id', 'receive_amount', 'receive_uid', 'modify_date', 'hash'];

let BuyLog = ['id', 'domainid', 'trade_no', 'third_no', 'product', 'product_desc', 'total_fee', 'fee_type', 'result', 'createdAt', 'updatedAt'];

/**
 * 选择对象的指定属性，构造新对象并返回
 * @param {*} obj 
 * @param {*} attrs 
 */
function record(obj, attrs) {
    obj = !!obj.orm ? obj.orm : obj; //兼容ORM对象

    let ret = {};
    for(let attr of attrs) {
        if(!!obj[attr]) {
            ret[attr] = obj[attr];
        }
    }
    return ret;
}

exports = module.exports = {
    TableField: {
        blockgame, StockBulletin, Mail,
        userwallet, redpack, redpackact, StockBase, CpFunding, CpStock, RedPacket,
        sharedredpack, sharedredpack_receive, BuyLog,
        userredpack, userredpackact, blockgamecomment, stock, record,
    },
}
