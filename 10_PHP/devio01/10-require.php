<?php

// 类似于css 的import 文件导入
// require 'config.php';

// // require 可以用于在当前脚本中载入另外一个脚本
// // require 在每一次调用时都会载入对应的文件
// echo SYSTEM_NAME;

// require 'config.php';

require_once 'config.php';

echo SYSTEM_NAME;

// require_once 如果之前载入过 不在执行（只执行一次）
// 由于类似于定义常量 定义函数 这种操作不能执行多次
// 所以 require_once 更加适合载入这种文件

require_once 'config.php';

echo SYSTEM_NAME;

?>