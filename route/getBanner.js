const express = require('express');
const app = express();
let router = express.Router();
let tool = require('../util/Non-Guaranteed_Bonus');
let changeRate = require('../util/exchangeRate');
let sqlConfig = require('../util/sqlConfig');

app.post('/' , (req , res) => {
    let type = req.body.type || '' , proId = req.body.proId || '';
    let sql = "select * from banner where position = ? AND pro_id = ?";
    sqlConfig.query(sql , [type , proId] , function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.send({
            code:0,
            data:rows,
            msg:'查询banner成功'
        })
    });
});

module.exports = app