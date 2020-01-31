<?php 
 
  //根据用户邮箱获取用户数据 AJAX请求
  //email => image
  require_once '../../config.php';

  //1. 接收传递过来的邮箱 
  if (empty($_GET['email'])){
     exit('缺少必要的参数');
  }
  $email = $_GET['email'];
  //2. 查询对应的头像地址
  $connection = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
  if (!$connection) {
  	 exit('连接数据库失败');
  }
  $query = mysqli_query($connection, "select avatar from users where email = '{$email}' limit 1;");
  //3. 
  if (!$query){
     exit('查询失败');
  }
  //4. 对查询结果进行处理
  $row = mysqli_fetch_assoc($query);

  echo $row['avatar'];


?>