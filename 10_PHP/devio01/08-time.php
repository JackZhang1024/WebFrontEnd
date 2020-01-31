<?php 
    
   //1. 通过代码设置时区 更推荐
   // date_default_timezone_set('PRC');
   // //2. 通过配置文件设置时区

   // // 获取到的是秒数 秒数为单位的时间戳
   // echo time();
   // echo "<br>";
   // // 格式化时间戳 
   // // 第一个是时间格式 
   // // 第二个是时间戳
   // echo date('Y-m-d', time());
   // echo '<br>';
   // echo date('Y-m-d H:i:s', time());


   $str = '2019-12-26 12:00:35';
   // 对已有时间做格式化
   // strtotime 可以用来将一个有格式的时间字符串 转换为一个 时间戳
   $timestamp =  strtotime($str);
   echo date('Y年m月d日 H:i:s', $timestamp);
   echo "<br>";
   // 换行需要转义操作 <br> <b\r>
   echo date('Y年m月d日 <b\r> H:i:s', $timestamp);
   // 下面是错误的
   //echo date("Y年m月d日 <b\r> H:i:s", $timestamp);
      


?>