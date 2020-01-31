const mongoose = require('mongoose');


// 连接 MongoDB数据库
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

// 创建一个模型
// 就是在设计数据库
// MongoDB 是动态的，非常灵活，只需要在代码中设计你的数据库就可以了
// mongoose 这个包就可以让你的设计编写过程变的非常的简单
// 集合的文档结构
const Cat = mongoose.model('Cat', { name: String });

for (var i = 0; i < 100; i++) {
    // 实例化一个Cat kitty 
    const kitty = new Cat({ name: 'Zildjian'+i });
    // kitty.save().then(() => console.log('meow'));
    // 持久化保存 Kitty 实例
    kitty.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Meow');
        }
    });
}