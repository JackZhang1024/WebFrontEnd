// 任务的顺序执行

// function* generatorFunc(){
// 	console.log('任务一');
// 	yield;
// 	console.log('任务二');
// 	yield;
// 	console.log('任务三');
// 	return;
// }

// let g = generatorFunc();
// let t1 = g.next(); // 任务一
// let t2 = g.next(); // 任务二
// let t3 = g.next(); // 任务三
// let t4 = g.next(); // 任务四

// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log(t4);


// 2. 如何在yield和return中返回数据
// function* generatorFunc(){
//    console.log('任务一');
//    yield 1;
//    console.log('任务二');
//    yield 2;
//    console.log('任务三');
//    return 3;
// }

// let g = generatorFunc();
// let t1 = g.next();
// let t2 = g.next();
// let t3 = g.next();
// let t4 = g.next();

// 任务一
// 任务二
// 任务三
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: true }
// { value: undefined, done: true }

// yield return 返回的数据就是 next()函数的返回的对象中的value对应的值
// done 为true 表示是的任务已经结束  false 表示还没有结束
// console.log(t1);
// console.log(t2);
// console.log(t3);
// console.log(t4);


// 如何让子任务在主任务中执行
// function* generatorSubFunc(){
// 	console.log('子任务一');
// 	yield;
// 	console.log('子任务二');
// 	return;
// }


// function* generatorFunc(){
// 	console.log('主任务一');
// 	yield;
// 	console.log('主任务二');
// 	let subFunc = generatorSubFunc();
// 	subFunc.next();
// 	subFunc.next();
// 	yield;
//     console.log('主任务三');
//     return;
// }



// let mainFunc = generatorFunc();
// let t1 = mainFunc.next();
// let t2 = mainFunc.next();
// let t3 = mainFunc.next();
// let t4 = mainFunc.next();
// let t5 = mainFunc.next();


// 对上面的代码进行优化 yield* generatorSubFunc执行的是子任务
function* generatorSubFunc(){
	console.log('子任务一');
	yield;
	console.log('子任务二');
	return;
}


function* generatorFunc(){
	console.log('主任务一');
	yield;
	console.log('主任务二');
	yield* generatorSubFunc();
    console.log('主任务三');
    return;
}



let mainFunc = generatorFunc();
let t1 = mainFunc.next();
let t2 = mainFunc.next();
let t3 = mainFunc.next();












