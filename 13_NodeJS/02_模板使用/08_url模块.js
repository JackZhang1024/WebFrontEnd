var url = require('url');

var obj = url.parse('http://www.note.com/search?name=zhangsan&age=10', true);
console.log(obj);
// /search
console.log(obj.pathname);
// zhang
console.log(obj.query.name);
// 10 
console.log(obj.query.age);
