<?php 
  
  // 接收用户提交的用户名和密码
  if (empty($_POST['username']) || empty($_POST['password'])) {
  	  exit('请提交用户名和密码');
  } 
  // 校验
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username === 'admin' && $password === '123') {
  	  exit('恭喜你,登录成功');
  }
  exit('用户名或者密码错误');

?>