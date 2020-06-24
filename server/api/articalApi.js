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
// 获取所有文章
router.post('/get', (req, res) => {
    var sql = $sql.artical.q;
    conn.query(sql, [],function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            return res.send(result) 
        }
    })
});
// 获取id文章
router.post('/getById',(req, res) => {
    var sql = $sql.artical.qById;
    var params = req.body;
    conn.query(sql, [params.id],function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            return res.send(result) 
        }
    })
});
module.exports = router;