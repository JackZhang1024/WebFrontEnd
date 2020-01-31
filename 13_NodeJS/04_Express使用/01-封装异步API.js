function fn(callback){
	setTimeout(function(){
		var data = "hello";
		callback(data);
	}, 1000);
}


// 调用fn ,得到内部的data
// console.log(fn());

// 如果需要获取一个函数中异步操作的结果，则必须通过回调函数来获取
fn(function(data){
	console.log(data);
});
