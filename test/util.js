//引入远程连接器
let {gameconn} = require('gamerpc');

//创建连接器对象
let remote = new gameconn(
    /*
    gameconn.CommMode.post,               //使用 WebSocket 连接方式
    {
        "UrlHead": "http",              //协议选择: http/https
        "webserver": {
            "host": "192.168.1.9",        //远程主机地址
            "port": 9901                //远程主机端口
        },
        "auth": {
            "openid": "18681223392",    //用户标识
            "openkey": "18681223392",   //和用户标识关联的用户令牌
            "domain": "official",         //用户所在的域
        }
    }
    */
    gameconn.CommMode.ws,      //连接方式
    {
        "UrlHead": "http",              //协议选择: http/https
        "webserver": {
            "host": "127.0.0.1",        //远程主机地址
            "port": 9901                //远程主机端口
        },
        "auth": {
            "openid": "18681223392",    //用户标识
            "openkey": "18681223392",   //和用户标识关联的用户令牌
            "domain": "official",       //用户所在的域
        }
    }
)
.setFetch(require('node-fetch'));      //设置node服务端环境下兼容的fetch函数，**注意只能在node服务端环境中执行，浏览器环境中系统自带 fetch 函数**

remote.NotifyType = gameconn.NotifyType;

module.exports = remote;