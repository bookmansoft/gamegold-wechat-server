const axios = require('axios')
const md5 = require('blueimp-md5')
const xml2js = require('xml2js')
const xmlParser = new xml2js.Parser()

const appId = 'wx4b3efb80ac5de780'
const appSecret = '36ad9a51a413cb4dbe1562206c6c0ba4'

// 商户号
const mchId = '1520782501'
// 支付的 key
const PAY_API_KEY = '41134e3b985d0254c6c7c64912fc0935'
const notifyUrl = 'https://mini.gamegold.xin/gg-wechat-server/wx/notify'

async function unifiedOrder(openId, ip, price, productIntro, tradeId) {

    // attach 是一个任意的字符串, 会原样返回, 可以用作一个标记
    const attach = 'GJS-ORG'
    // 一个随机字符串
    const nonceStr = getNonceStr()
    // 用户的 openId
    //const openId = 'user openId'
    // 生成商家内部自定义的订单号, 商家内部的系统用的, 不用 attach 加入也是可以的
    //const tradeId = getTradeId(attach)
    // 生成签名
    const sign = getPrePaySign(appId, attach, productIntro, mchId, nonceStr, notifyUrl, openId, tradeId, ip, price)
    // 这里是在 express 获取用户的 ip, 因为使用了 nginx 的反向代理, 所以这样获取
    //let ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress
    //ip = ip.match(/\d+\.\d+\.\d+\.\d+/)[0]
    //将微信需要的数据拼成 xml 发送出去
    const sendData = wxSendData(appId, attach, productIntro, mchId, nonceStr, notifyUrl, openId, tradeId, ip, price, sign)

    // 使用 axios 发送数据带微信支付服务器, 没错, 后端也可以使用 axios
    let result = await new Promise(function(resolve, reject){
        axios.post('https://api.mch.weixin.qq.com/pay/unifiedorder', sendData).then(wxResponse => {
            // 微信返回的数据也是 xml, 使用 xmlParser 将它转换成 js 的对象
                xmlParser.parseString(wxResponse.data, (err, success) => {
                    if (err) {
                        reject(err)
                    } else {
                        console.log(success);
                        if (success.xml.return_code[0] === 'SUCCESS') {
                            const prepayId = success.xml.prepay_id[0]
                            const payParamsObj = getPayParams(prepayId, tradeId)
                            // 返回给前端, 这里是 express 的写法
                            //res.json(payParamsObj)
                            console.log('payParamsObj', payParamsObj);
                            resolve(payParamsObj);
                        } else {
                            if (err) {
                                console.log(err);
                                reject(err)
                                //res.sendStatus(502)
                            } else if (success.xml.return_code[0] !== 'SUCCESS') {
                                //res.sendStatus(403)
                                reject(success.xml.return_msg[0])
                            }
                        }
                    }
                })
        }).catch(err => {
            console.log(err);
            reject(err)
        })
    });
    return result;

}


// 预定义的一些工具函数
function getNonceStr() {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i < 16; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getPaySign(appId, timeStamp, nonceStr, package) {
    var stringA = 'appId=' + appId +
        '&nonceStr=' + nonceStr +
        '&package=' + package +
        '&signType=MD5' +
        '&timeStamp=' + timeStamp

    var stringSignTemp = stringA + '&key=' + PAY_API_KEY
    var sign = md5(stringSignTemp).toUpperCase()
    return sign
}

function getTradeId(attach) {
    var date = new Date().getTime().toString()
    var text = ""
    var possible = "0123456789"
    for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    var tradeId = 'ty_' + attach + '_' + date + text
    return tradeId
}

function getPrePaySign(appId, attach, productIntro, mchId, nonceStr, notifyUrl, openId, tradeId, ip, price) {
    var stringA = 'appid=' + appId +
        '&attach=' + attach +
        '&body=' + productIntro +
        '&mch_id=' + mchId +
        '&nonce_str=' + nonceStr +
        '&notify_url=' + notifyUrl +
        '&openid=' + openId +
        '&out_trade_no=' + tradeId +
        '&spbill_create_ip=' + ip +
        '&total_fee=' + price +
        '&trade_type=JSAPI'
    var stringSignTemp = stringA + '&key=' + PAY_API_KEY
    var sign = md5(stringSignTemp).toUpperCase()
    return sign
}

function wxSendData(appId, attach, productIntro, mchId, nonceStr, notifyUrl, openId, tradeId, ip, price, sign) {
    const sendData = '<xml>' +
        '<appid>' + appId + '</appid>' +
        '<attach>' + attach + '</attach>' +
        '<body>' + productIntro + '</body>' +
        '<mch_id>' + mchId + '</mch_id>' +
        '<nonce_str>' + nonceStr + '</nonce_str>' +
        '<notify_url>' + notifyUrl + '</notify_url>' +
        '<openid>' + openId + '</openid>' +
        '<out_trade_no>' + tradeId + '</out_trade_no>' +
        '<spbill_create_ip>' + ip + '</spbill_create_ip>' +
        '<total_fee>' + price + '</total_fee>' +
        '<trade_type>JSAPI</trade_type>' +
        '<sign>' + sign + '</sign>' +
        '</xml>'
    return sendData
}

function getPayParams(prepayId, tradeId) {
    const nonceStr = getNonceStr()
    const timeStamp = new Date().getTime().toString()
    const package = 'prepay_id=' + prepayId
    const paySign = getPaySign(appId, timeStamp, nonceStr, package)
    // 前端需要的所有数据, 都从这里返回过去
    const payParamsObj = {
        nonceStr: nonceStr,
        timeStamp: timeStamp,
        package: package,
        paySign: paySign,
        signType: 'MD5',
        tradeId: tradeId,
    }
    return payParamsObj
}

exports = module.exports = {
    unifiedOrder, getTradeId
}