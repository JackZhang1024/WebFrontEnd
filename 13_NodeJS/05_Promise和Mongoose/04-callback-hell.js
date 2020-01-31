var fs = require('fs');

fs.readFile('./data/a.txt', 'utf-8',function(error, data) {
	// body
    if (error) {
      // return console.log('读取失败');	
      throw err;
    } else{
       console.log(data);
    }
})

fs.readFile('./data/b.txt', 'utf-8',function(error, data) {
	// body
    if (error) {
      // return console.log('读取失败');	
      throw err;
    } else{
       console.log(data);
    }
})


fs.readFile('./data/c.txt', 'utf-8',function(error, data) {
	// body
    if (error) {
      // return console.log('读取失败');	
      throw err;
    } else{
       console.log(data);
    }
})


// 上面的操作无法保证执行顺序

// 通过回调嵌套的方式 
// 为了解决以上编码方式带来的问题（回调地狱嵌套）所以ES6中新增了一个API promise
// promise的意思是承诺
// Promise 是个容器
// 容器中存放了一个异步任务
// pending-》 状态 Resolve Rejected 只能变成其中的一种















