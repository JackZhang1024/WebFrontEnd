class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHi() {
        console.log('大家好');
    }

}

class America extends Person {
    constructor(name, age) {
        super(name, age)
    }
}

class Chinese extends Person {
    constructor(name, age, IDNumber) {
        super(name, age)
        this.IDNumber = IDNumber
    }

    speakChinese() {
        console.log('说中国话');
    }
}

const america = new America('Jack', 20);
america.sayHi();
console.log(america);

const chinese = new Chinese('张三', 22, '1132030xxxx');
chinese.sayHi();
chinese.speakChinese();
console.log(chinese);


