let facade = require('gamecloud')
let {EntityType} = facade.const

/**
 * 解散联盟
 */
function handle(event){ 
    this.GetMapping(EntityType.AllyNews).groupDel(event.aid);
}

module.exports.handle = handle;
