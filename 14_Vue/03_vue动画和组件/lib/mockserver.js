Mock.mock('http://vue.studyit.io/api/students',
    {
        "userInfo|4": [{

            "id|+1": 1,

            "name": "@cname",

            "ago|18-28": 25,

            "sex|1": ["男", "女"],

            "job|1": ["web", "UI", "python", "php"]    //工作是数组中的一个

        }]
    }
);

Mock.mock('http://vue.studyit.io/api/getprodlist',
    {
        "message|10": [{
            "id|+1": 1,
            "name": "@cname",
            "ctime": new Date(),
            "img": Mock.Random.image('200x100')
        }],
        "status": 0,
    }
);
// 删除品牌
//     /\/api\/list-prices[\s\S]*?/   http://vue.studyit.io/\api/delproduct
// 'http://vue.studyit.io/api/delproduct/1' 
Mock.mock(/http:\/\/vue.studyit.io\/api\/delproduct/, 'get', function (options) {
    //通过正则表达式提取到url后面的id
    // console.log(options.url);
    console.log(options);
    // http://vue.studyit.io/api/delproduct/1
    // let id = /\/api\/getGoodsList\/(\d+)/.exec(option.url)
    // var id = /http:\/\/vue.studyit.io\/api\/delproduct\/(\d+)/.exec(options.url);
    // ["/api/delproduct/1", "1", index: 21, input: "http://vue.studyit.io/api/delproduct/1",
    // groups: undefined]0: "/api/delproduct/1"1: "1"index: 21 
    // input: "http://vue.studyit.io/api/delproduct/1"groups: undefinedlength: 2__proto__: Array(0)

    var id = /\/api\/delproduct\/(\d+)/.exec(options.url)[1];
    console.log(typeof id);
    return Mock.mock({
        "id": parseInt(id),
        "name": " @cname",
        "ctime": new Date(),
        "img": Mock.Random.image('200x200')
    });
});

Mock.mock('http://vue.studyit.io/api/addproduct', 'post', function (options) {
    console.log(options);
    // console.log(GetRequest(options.body));
    var currentId = parseInt(GetRequest(options.body).id) + 1;
    var name = GetRequest(options.body).name;
    console.log(name);
    // console.log(typeof currentId);
    // console.log(currentId);
    const data = Mock.mock({
        "id|+1": currentId,
        "name": " @cname",
        "ctime": new Date(),
        "img": Mock.Random.image('200x200')
    });
    return data;
});

function GetRequest(queryStr) {
    var theRequest = new Object();
    strs = queryStr.split("&");
    for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
    }
    return theRequest;
}

