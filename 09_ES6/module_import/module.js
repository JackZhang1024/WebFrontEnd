// 导出方式一
// export var name = 'Jack'
// export var age = 18

// 导出方式二
var name = 'Jack'
var age = 10
export { name, age }

// 导出函数
export function sayHi() {
    console.log('sayHi, Hello world');
}

// 导出类
export class Teacher {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

