<?php

// 能通过PHP代码执行一个SQL语句得到查询的结果

// 1. 建立与数据库服务器之间的连接
// '127.0.0.1', 'root', 'root', 'demo', '8889'
// '127.0.0.1' 连接地址$_COOKIE['']
// root  用户名
// root  密码
// demo 数据库名称
// 8889  端口号
// 如果想要使用这个扩展提供的函数 必须开启扩展

// $connection = mysqli_connect('127.0.0.1', 'root', 'root', 'demos', '8889');
// 如果需要在调用函数的时候忽略错误 或者警告 可以在函数名称前加上@
$connection = @mysqli_connect('127.0.0.1', 'root', 'root', 'demo', '8889');
// echo phpinfo();
// var_dump($connection);
if (!$connection) {
	# code...
	//连接数据库失败
	exit('<h1>连接数据库失败</h1>');
}

// 基于一次刚才获取的连接对象进行一次查询操作
$query = mysqli_query($connection, 'select * from users;');
// $query = mysqli_query($connection, 'delete from users where id = 1;');

if (!$query) {
	exit('<h1>查询数据库失败</h1>');
}

while ($row = mysqli_fetch_assoc($query)) {

}

// 如何拿到受影响行
$rows = mysqli_affected_rows($connection);

// 释放查询结果集
mysqli_free_result($query);

// 关闭连接
mysqli_close($connection);

?>