let facade = require('gamecloud')
let {EntityType, IndexType} = facade.const

/**
 * Created by liub on 2019.06.05
 */
function handle(data){ 
    if(!!data.params.address && !!data.params.addrType) {
        switch(data.params.addrType) {
            default: {
                data.user.baseMgr.info.setAttr('phone', data.params.address);
                this.GetMapping(EntityType.User).addId([data.params.address, data.user.id], IndexType.Phone);
                break;
            }
        }
    }
}

module.exports.handle = handle;
