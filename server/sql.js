var sql = {
    user: {
        add: 'insert into user(name,password,sex) values (?,?,?)',
        addhouse:'update user set house=? where id=?',
        updatepassword:'update user set password=? where name=?',
        queryByName:'select * from user where name=?'
    },
    password:{
        query:'select * from password'
    },
    artical:{
        q:'select id,title,time,type,pic from artical',
        qById:'select * from artical where id=?'
    }
}

module.exports = sql