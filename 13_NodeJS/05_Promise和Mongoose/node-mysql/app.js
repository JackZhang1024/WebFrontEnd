var mysql = require('mysql');

// https://www.npmjs.com/package/mysql
// 1. 创建连接
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'root',
	database: 'node_mysql',
	port:'8889'
});
// 2. 开始连接
connection.connect();

// 3. 进行操作

// 1. 进行查询操作
// connection.query('select * from users;', function(error, results, fields){
// 	if (error){
//         throw error; 
// 	}
// 	console.log('The solution is: ', results);
// 	console.log('The fileds is ', fields);	
// });

/**
zfz:node-mysql zhangfengzhou$ node app.js
The solution is:  OkPacket {
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  serverStatus: 2,
  warningCount: 0,
  message: '',
  protocol41: true,
  changedRows: 0 }
The fileds is  undefined
*/

// 2. 进行插入操作

// connection.query('insert users values("Jack", 10);', function(error, results, fields){
// 	if (error){
//         throw error; 
// 	}
// 	console.log('The solution is: ', results);
// 	console.log('The fileds is ', fields);	
// });


// 3. 进行修改操作
// connection.query('update users set name="JackMa", age=19 where name="Jack";', function(error, results, fields){
// 	if (error){
//         throw error; 
// 	}
// 	console.log('The solution is: ', results);
// 	console.log('The fileds is ', fields);	
// });

// 4. 删除操作
connection.query('delete from users where name="Lily";', function(error, results, fields){
	if (error){
        throw error; 
	}
	console.log('The solution is: ', results);
	console.log('The fileds is ', fields);	
});


// 4. 关闭连接
connection.end();



