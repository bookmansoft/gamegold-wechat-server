/**
 * 单元测试：CURD
 * Creted by liub 2017.3.24
 */

const {connector} = require('./util')

describe('CURD', function() {
    this.beforeEach(async () => {
        await connector.login({openid: `${Math.random()*1000000000 | 0}`});
    });

    it('创建', async () => {
        let msg = await connector.fetching({func: "test.Create"});
        console.log(msg);
    });

    it('批量创建', async () => {
        let msg = await connector.fetching({func: "test.Creates", items:[{item:'1'},{item:'2'}]});
        console.log(msg);
    });

    it('删除', async () => {
        let msg = await connector.fetching({func: "test.Delete", id:1});
        console.log(msg);
    });

    it('批量删除', async () => {
        let msg = await connector.fetching({func: "test.Deletes", ids:[1,2,3]});
        console.log(msg);
    });

    it('查询', async () => {
        let msg = await connector.fetching({func: "test.Retrieve", id: 2});
        console.log(msg);
    });

    it('更新', async () => {
        let msg = await connector.fetching({func: "test.Update", id: 2});
        console.log(msg);
    });

    it('列表', async () => {
        let msg = await connector.fetching({func: "test.List"});
        console.log(msg);
    });
});
