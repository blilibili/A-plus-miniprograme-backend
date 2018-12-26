const express = require('express');
const app = express();
let router = express.Router();
let tool = require('../util/Non-Guaranteed_Bonus');
let changeRate = require('../util/exchangeRate');
let sqlConfig = require('../util/sqlConfig');
let request = require('request');

app.post('/' , (req , res) => {
    let code = req.body.code;
    let _AppId = 'wxb2b1c5c0233caa25';
    let _AppSecret = 'ffb3101c6104bb600a2b1e5e13550175';
    let url = 'https://api.weixin.qq.com/sns/jscode2session?appid='+_AppId+'&secret='+_AppSecret+'&js_code='+code+'&grant_type=authorization_code'
    request(url , (err , res , data) => {
        console.log(err , data)
    })
});

module.exports = app