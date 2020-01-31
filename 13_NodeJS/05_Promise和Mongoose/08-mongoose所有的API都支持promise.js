var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//第一步 连接数据库
// 指定连接的数据库不需要存在，在插入第一条数据之后会自动创建
mongoose.connect('mongodb://localhost/itcast');

//第二步 设计集合结构（表结构）
// 字段名称就是表结构
// var blogSchema = new Schema({

//     title: String,
//     author: String,
//     body: String,
//     comments: [{body:String, date:Date}],
//     date: {type:Date, default: Date.now}
//     hidden: Boolean,
//     meta:{
//       votes: Number,
//       favs:Number
//     }

// });

var userSchema = new Schema({
    username: {
        type: String,
        required: true // 必须要有
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String
    }
});


//第三步 将文档结构发布为模型
//mongoose.model 方法就是用来讲一个架构发布为model
//第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//  mongoose 会自动键大写名词的字符串生成小写复数
// 例如将 User 最终会转化成 users集合名称
//第二个参数： 架构 Schema
//返回值： 模型构造函数
var User = mongoose.model('User', userSchema);

//第四部：当我们有模型构造函数，就可进行相应的操作了
var admin = new User({
    username: 'zs',
    password: '123456',
    email: 'admin@admin.com',
});


// 增加数据

// admin.save(function(err, ret) {
//     if (err) {
//         console.log('保存失败', err);
//     } else {
//         console.log('保存成功', ret);
//     }
// });

// 查询数据

// 通过模型构造函数来查找
// User.find(function(err, ret){

//      if (err){
//          console.log('查询失败', err);
//      } else{
//          console.log('查询成功', ret);
//      }
// });

// 按照条件查询
// User.find({ username: 'zs' }, function(err, ret) {

//     if (err) {
//         console.log('查询失败', err);
//     } else {
//         console.log('查询成功', ret);
//     }
// });


// find 方法支持promise 操作

// User.find()
//   .then(function(data){
//      console.log(data);
//   });


// 用户注册
// 1. 判断用户是否存在
//    如果已经存在 结束注册
//    如果不存在，注册（保存一条用户信息）
User.findOne({ username: '234' })
    .then(function(user) {
        console.log(user);
        if (user) {
            // 用户已存在 不能注册
            console.log('用户已存在');
            throw new Error('用户已存在');
        } else {
            //  用户不存在 进行注册
            return new User({
                username: '234',
                password: '122',
                email: 'admin@admin.com',
            }).save();
        }
    })
    .then(function(ret) {
        console.log('保存成功');
    });

// 按照条件查询单个数据
// User.findOne({ username: 'zs', password: '123456'}, function(err, ret) {

//     if (err) {
//         console.log('查询失败', err);
//     } else {
//         console.log('查询成功', ret);
//     }
// });


// 删除数据
// 方法一 remove 
// 方法二 根据id删除 findByIdAndRemove
// 方法三 Model.findOneAndRemove(conditions, [options],[callback]);

// User.remove({username:'zs'}, function(err, ret){
//     if (err){
//        console.log('删除失败', err);
//     } else{
//        console.log('删除成功', ret);
//     }
// });


// 修改数据
// User.findOneAndUpdate('5e1aabcf50ff880f29e831c1', {password: '123'}, function(err, ret){
//      if (err){
//         console.log('更新失败', err);
//      } else {
//         console.log('更新成功', ret);
//      }
// });


// > show dbs
// admin   0.000GB
// config  0.000GB
// itcast  0.000GB
// local   0.000GB
// test    0.000GB
// > use itcast
// switched to db itcast
// > show collections
// users
// > db.users.find()
// { "_id" : ObjectId("5e1aabcf50ff880f29e831c1"), "username" : "admin", "password" : "123",
// "email" : "admin@admin.com", "__v" : 0 }
// >