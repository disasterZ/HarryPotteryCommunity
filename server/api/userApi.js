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
// 增加用户接口
router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name,params.password,params.sex], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            return res.send("add success") 
        }
    })
});
// 增加house接口
router.post('/addhouse', (req, res) => {
    var sql = $sql.user.addhouse;
    var params = req.body;
    conn.query(sql, [params.house,params.id], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            return res.send("success") 
        }
    })
});
// 查询用户信息
router.post('/getUser', (req, res) => {
    var sql = $sql.user.queryByName;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name], function (err, result) {
        if (err) {
            return res.send("无此用户")
        }
        if (result) {
            return res.send(result) 
        }
    })
});
module.exports = router;