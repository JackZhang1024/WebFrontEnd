console.log('ok');

function Person(name, age){
   this.name = name
   this.age = age 
}

const person = new Person('小王', 10);
console.log(person);
// person实例的属性
console.log(person.name+'---'+person.age);
// person的实例方法
Person.prototype.sayHello = function(){
      console.log('person实例 '+this.name+" sayHello");
}
person.sayHello();
// Person的静态属性
Person.info = '哈哈哈'
console.log(Person.info);
// Person的静态方法
Person.show = function(){
    console.log('Person的静态方法 show');
}
Person.show();

// 我们将class 称作语法糖
class Animal{
    // 注意在{}之内只能写 构造器 静态属性 静态方法 实例方法
    // constructor(){}
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    static info = '3333'

    jiao(){
      console.log('Animal实例的方法jiao()');
    }
    
    static show(){
      console.log('Animal静态方法 show()');
    }
}

const animal = new Animal('大黄', 10, '雄')
console.log(animal.name+' '+animal.age+' '+animal.gender);
animal.jiao();
console.log(Animal.info);
Animal.show();
















