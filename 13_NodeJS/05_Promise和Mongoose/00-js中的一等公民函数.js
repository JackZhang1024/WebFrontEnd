// 一种数据类型
// 参数
// 范湖值
// 函数太灵活了 无所不能
// 一般情况下，把函数作为参数的目的就是为了获取函数内部的异步操作结果
// JavaScript单线程  事件循环

// function add(x, y){
// 	return x+y;
// }


// add(10, 20);

// console.log(1);

// setTimeout(function(){
//     console.log(3);
// }, 1000);

// console.log(2);


function add(x, y) {
    console.log(1); 
    setTimeout(function (argument) {
    	// body...
    	console.log(2);
    	var ret = x+y;
    	// 这里的return 你不可能拿到
    	return ret;
    }, 1000);
    console.log(3);
}


console.log(add(19, 20));

// 注意：凡是需要得到一个函数内部异步操作的结果
// setTimeOut
// readFile
// writeFile
// ajax
// 这种情况必须通过：回调函数








