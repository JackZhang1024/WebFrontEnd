// const http = require('http');
// http.createServer('request',function(request, response) {
//     var url = request.url;
//     if (url ==='/getscript'){
//        // 拼接一个合法的JS脚本，这里接的是一个方法的调用 
//        var script = "show()";
//        res.end(script);    
//     } else {
//        response.end('404'); 
//     }
// }).listen(3000,'localhost',function(){
//     console.log('Server running at http://127.0.0.1:3000/')
// })

const http = require('http');
const urlModule= require('url');
http.createServer(function (request, response) {
    // var url = request.url;
    const {pathname: url, query} = urlModule.parse(request.url, true);
    if (url ==='/getscript'){
       // 拼接一个合法的JS脚本，这里接的是一个方法的调用 
    //    var script = "show()";
    var data ={name:'zhangsan', age: 18, gender:'nv'};
    var script =  `${query.callback}(${JSON.stringify(data)})`;
       response.end(script);    
    } else {
       response.end('404'); 
    }
}).listen(3000,'localhost',function(){
    console.log('Server running at http://127.0.0.1:3000/')
})