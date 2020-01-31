/**
 router.js 路由模块
 职责：
   1. 处理路由
   2. 根据不同的请求方法+请求路径设置具体的处理方法
   模块职责要单一，不要乱写
   我们划分模块的目的就是为了增强代码的可维护性 
   提高开发效率

*/
var fs = require('fs');
var Student = require('./student');

// 相当于把下面这些请求放到app.js文件中一样
// 这样也不方便
// module.exports = function(app) {
//     // body...
//     app.get('/students', function(req, res) {
//         // 所以这里一定要手动转化成对象
//         fs.readFile('./db.json', 'utf-8', function(error, data) {
//             if (error) {
//                 return res.status(500).send('Server Error');
//             }
//             // body
//             console.log(typeof data);
//             res.render('index.html', {
//                 fruits: ['苹果', '橘子', '香蕉'],
//                 students: JSON.parse(data).students
//             });
//         })
//     });

//     app.get('/students/new', function(req, res) {

//     });

//     app.get('/students/new', function(req, res) {

//     });

//     app.get('/students/edit', function(req, res) {

//     });

//     app.get('/students/edit', function(req, res) {

//     });

//     app.get('/students/delete', function(req, res) {

//     });
// }


// Express 提供了一种更好的方式
var express = require('express');
// 1. 创建一个路由容器
var router = express.Router();
// 2. 把路由都挂载到路由容器中

router.get('/students', function(req, res) {
    // 所以这里一定要手动转化成对象
    // fs.readFile('./db.json', 'utf-8', function(error, data) {
    //     if (error) {
    //         return res.status(500).send('Server Error');
    //     }
    //     // body
    //     console.log(typeof data);
    //     res.render('index.html', {
    //         fruits: ['苹果', '橘子', '香蕉'],
    //         students: JSON.parse(data).students
    //     });
    // })

    Student.find(function(error, data) {
        if (error) {
            return res.status(500).send('Server Error');
        }
        res.render('index.html', {
            fruits: ['苹果', '橘子', '香蕉'],
            students: data
        });
    });
});



router.get('/students/new', function(req, res) {
    // res.send('new students');
    res.render('new.html');
});


// 添加新的用户数据
router.post('/students/new', function(req, res) {
    // 获取表单数据
    // console.log(req.body);
    // { name: 'zhangsan', gender: '0', age: '12', hobbies: '女' }
    // 处理
    // 将数据保存到 db.json 文件中用以持久化
    // 先读取文件
    // 将读取的文件变成对象
    // push新的对象到数组中
    // 将数组变成字符串然后写到文件中
    // fs.readFile('./db.json', 'utf-8', function(error, data) {
    //     if (error) {
    //         return res.status(500).send('Server Error');
    //     }
    //     // body
    //     console.log(typeof data);
    //     JSON.parse(data).students.push(data);

    // })
    // 发送响应
    new Student(req.body).save(function(error) {
        if (error) {
            console.log(error);
            return res.status(500).send('Server Error');
        } else {
            res.redirect('/students/');
        }
    });

});

// 渲染编辑学生页面 只是获取数据然后展示在页面上
router.get('/students/edit', function(req, res) {
    // 1. 在客户端的列表页中处理链接问题（需要有id参数）
    // 2. 获取需要编辑的学生 id
    // 3. 渲染页面
    // 根据 id 把学生信息插叙出来
    // 使用模板引擎渲染页面
    // res.render('edit.html',{
    //    student: {

    //    }
    // });
    var id = req.query.id.replace(/"/g, '');
    console.log('/students/edit', id);
    Student.findById(id, function(error, student) {
        if (error) {
            return res.status(500).send('Server Error');
        }
        console.log(student);
        res.render('edit.html', { student: student });
    });
});


// 更新学生数据
router.post('/students/edit', function(req, res) {
    // 1. 获取表单数据
    // 2. 更新 
    // Student.update()
    // 3. 发送响应
    var student = req.body;
    console.log('修改', student);
    var id = student.id.replace(/"/g, '');
    console.log('修改 /students/edit', id);
    Student.findByIdAndUpdate(id, student, function(error) {
        if (error) {
            return res.status(500).send('Server Error');
        }
        res.redirect('/students');
    });
});

router.get('/students/delete', function(req, res) {
    // 1. 获取要删除id
    // 2. 根据id执行删除操作
    // 3. 发回响应
    console.log(req.query.id);
    var id = req.query.id.replace(/"/g, '');
    // 根据id删除数据
    Student.findByIdAndRemove(id, function(error) {
        if (error) {
            return res.status(500).send('Server Error');
        }
        res.redirect('/students/');
    });
});

// 3. 导出router
// 导出整个模块
module.exports = router;