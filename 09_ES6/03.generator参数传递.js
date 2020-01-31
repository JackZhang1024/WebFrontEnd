function* cal(){
	console.log('可以开始计算');
	let a = yield;
	console.log('接收参数a', a);
	let b = yield;
	console.log('接收参数b', b);
    let res = a + b;
    yield res;
    res = res*res;
    let c = yield res;
    console.log('接收参数c', c);
    res = res-c;
    return res;
}

// 注意next函数的参数就是上一次yield表示式的值
let c = cal();
c.next();
c.next(5);
c.next(3);
// 开始执行第9行 然后在第10停止 
console.log(c.next());
// next(10) 传递的参数起始就是上一个yield表达式的值 使得 c = 10
// 从第10行开始 然后在return处结束
console.log(c.next(10));




