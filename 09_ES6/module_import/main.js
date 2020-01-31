// import {name, age} from './module.js'
import * as module from './module.js'

// import 后面的大括号里面是导入到该模块的对象名称 这个对象可以是变量 函数 或者 类 
import {Teacher} from './module.js'
import {sayHi} from './module.js'

// console.log(name+' '+age);
console.log(module.name, module.age);
// module.sayHi();

const teacher = new Teacher('Rose', 23);
console.log('name is '+teacher.name+'---age is '+teacher.age);

sayHi();
