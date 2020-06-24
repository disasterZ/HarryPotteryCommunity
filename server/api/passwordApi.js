var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sql');
// 连接数据库
var conn = mysql.createConnection(models.mysql);
conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1', msg: '操作失败'
        });
    }
    else {
        res.json(
            ret
        );
    }
};
// 查询密码信息
router.post('/get', (req, res) => {
    var sql = $sql.password.query;
    var params = req.body;
    console.log(params);
    conn.query(sql, [],function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            return res.send(result) 
        }
    })
});
module.exports = router;