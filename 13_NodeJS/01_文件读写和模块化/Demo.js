// unknown = "hello world"
// console.log(unknown);
// var unknown = 'hello'
// console.log(unknown);

// let f = a => a*a
// let result = f(5)
// console.log(result)


// let func = ({name, age})=>console.log(name, age);
// func({name:'Jack', age:12});

let student = {
    name: 'Jack',
    age: 12,
    print: () => {
    	console.log(this);
        console.log(this.name, this.age);
    }
}

student.print();
console.log(this);

let map = new Map();
map.set('name', 'Jack');
map.set('age', 10);
map.set('gender', 'male');
console.log(map);
console.log(map.get('name'));
console.log(map);
map.delete('name');
console.log(map);
map.clear();
console.log(map);



