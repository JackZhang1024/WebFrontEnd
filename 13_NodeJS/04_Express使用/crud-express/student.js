/**
student.js
数据操作模块
职责： 操作文件中数据 只处理数据 不关系业务

**/


/**
获取所有学生列表
return []
*/

/** 这里才是我们学习Node的精华 奥义之所在 */
var fs = require('fs');
var dbPath = './db.json';

// callbakc 中的参数第一个是error 成功是null 错误是对象  第二个是data 成功是 数组 错误是undefined
exports.find = function(callback) {
    fs.readFile(dbPath, 'utf-8', function(error, data) {
        //JSON.parse(data).students;
        if (error) {
            return callback(error);
        }
        console.log(typeof data);
        console.log(data);
        callback(null, JSON.parse(data).students);
    });
}

/**
根据id获取学生信息
*/
exports.findById = function(id, callback) {
    // body...
    fs.readFile(dbPath, 'utf-8', function(error, data) {
        //JSON.parse(data).students;
        if (error) {
            return callback(error);
        }
        var students = JSON.parse(data).students;
        var stu = students.find(function(item) {
            return item.id === parseInt(id);
        });
        callback(null, stu);
    });
}

// find(function (error, data) {
//  // body...

// })


/**
添加保存学生
*/

exports.save = function(student, callback) {
    fs.readFile(dbPath, 'utf-8', function(error, data) {
        //JSON.parse(data).students;
        if (error) {
            return callback(error);
        }
        var students = JSON.parse(data).students;
        //console.log('save 1', students);
        if (students.length > 0) {
            // 处理ID 变成唯一的 不重复
            student.id = students[students.length - 1].id + 1;
        }
        //console.log('save ', student);
        // 把用户传递的对象保存到数组中
        students.push(student);
        var fileData = JSON.stringify({ students: students });
        // callback();
        fs.writeFile(dbPath, fileData, function(error) {
            if (error) {
                return callback(error);
            }
            // 成功就没错 所以错误对象就是 null 
            callback(null);
        });
    });
}

/**
更新学生
*/
exports.updateById = function(student, callback) {
    fs.readFile(dbPath, 'utf-8', function(error, data) {
        //JSON.parse(data).students;
        if (error) {
            return callback(error);
        }
        var students = JSON.parse(data).students;
        // 要修改谁 就需要找出谁
        // ES6中的一个数组方法 find
        // 需要接收一个函数作为参数
        // 当某个遍历项符合某个特定数据 item.id === student.id find就会终止遍历
        // 同时返回遍历结果
        // 这里记得把 id 统一转化成整数
        student.id = parseInt(student.id);
        student.age = parseInt(student.age);
        student.gender = student.gender;

        var stu = students.find(function(item) {
            return item.id === parseInt(student.id);
        });
        // student 中的数据是最新的
        for (var key in student) {
            stu[key] = student[key];
        }
        var fileData = JSON.stringify({ students: students });
        // callback();
        fs.writeFile(dbPath, fileData, function(error) {
            if (error) {
                return callback(error);
            }
            // 成功就没错 所以错误对象就是 null 
            callback(null);
        });
    });
}

// updateById({id:1, name:'xx', age: 14}, function(err){});

/**
删除学生
*/
exports.deleteById = function(id, callback) {
    fs.readFile(dbPath, 'utf-8', function(error, data) {
        //JSON.parse(data).students;
        if (error) {
            return callback(error);
        }
        var students = JSON.parse(data).students;
        // findIndex 方法专门用来根据条件查找元素的下标
        var deleteId = students.findIndex(function(item) {
            return item.id === parseInt(id);
        });
        // 根据下标从数组中删除对应的学生对象
        students.splice(deleteId, 1);
        var fileData = JSON.stringify({ students: students });
        // callback();
        fs.writeFile(dbPath, fileData, function(error) {
            if (error) {
                return callback(error);
            }
            // 成功就没错 所以错误对象就是 null 
            callback(null);
        });
    });

}