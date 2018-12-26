const express = require('express');
const app = express();
let router = express.Router();
let tool = require('../util/Non-Guaranteed_Bonus');
let changeRate = require('../util/exchangeRate');
let sqlConfig = require('../util/sqlConfig');

app.post('/' , (req , res) => {
    let name = req.body.name , pinyin = req.body.pinyin , phone = req.body.phone , email = req.body.email , book_date = req.body.book_date , wx_number = req.body.wx_number;
    let tmp = [name , pinyin , phone , email , book_date , wx_number];
    let sql = "insert into book_info (name , pinyin , phone , email , book_date , wx_number) values(? , ? , ? , ? , ? , ? )";
    sqlConfig.query(sql , tmp, function(err, rows, fields) {
        if (err) {
            console.log('[query] - :' + err);
            return;
        }
        res.send({
            code:0,
            data:rows,
            msg:'添加成功'
        })
    });
});

module.exports = app