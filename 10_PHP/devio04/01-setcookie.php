path 设置cookie的作用路径范围
/ =>  只要在网站根目录下的所有连接地址中都可以访问这个cookie
/users => 只能在 users 目录下的路径才能访问



http://day-10.io/01-setcookie.php
http://day-10.io/02-setcookie.php
http://day-10.io/users/index.php


domain 设置cookie 的作用域范围

day-10.io => 所有的 day-10.io的子域 都可以访问

- www.day-10.io 可以
- foo.day-10.io 可以
- day-11.io 不可以

www.day-10.io => 所有的www.day10.io 的子域 都可以访问到

- a.www.day-10.io 可以
- foo.day-10.io 不可以
