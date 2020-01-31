<?php 

  $str = "hello";

  // strlen 获取文字的长度
  echo strlen($str);

  echo '<br>';

  // 获取汉字的长度
  echo strlen("汉字");


  echo '<br>';
  // PHP 内置模块的内置函数直接用 
  // 
  // PHP 中专门为 宽字符集 添加一套 API
  // 这一套API 不在内置的 1000+ 里面，而是在一个模块中
  // 模块成员必须通过配合文件载入模块后再使用
  // 所有的API 都是 mb_xxx
  // 扩展程序里添加 mob_string.dll
 
  echo mb_strlen('你好');
   



?>