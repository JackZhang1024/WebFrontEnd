<?php

require_once 'config.php';

if (!session_id()){
    session_start();
}

function bx_get_current_user(){
    if (empty($_SESSION['current_login_user'])){
      header('Location: /admin/login.php');
      exit(); // 没有必要再继续执行 
    }
    return $_SESSION['current_login_user'];
}

// 通过数据库查询获取数据
// 返回的数据是索引数组
function bx_fetch_all($sql){
	$connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
	
	if (!$connect){
       exit('连接失败');
	}

	$query = mysqli_query($connect, $sql);
  if (!$query) {
       // exit('查询失败');
      return false;
  }
  while ($row = mysqli_fetch_assoc($query)) {
        $result[] = $row;
  }
  // 释放资源
  mysqli_free_result($query);
  // 关闭连接
  mysqli_close($connect);
  return $result;
}


// 获取单条数据
// 关联数组 {name=>'anny', gender=>'female'}
function bx_fetch_one($sql){
	$res = bx_fetch_all($sql);
	// var_dump($res[0]);
    return isset($res[0])? $res[0]: null; 
}

// 执行一个增删改语句
function bx_execute($sql){
  $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
  
  if (!$connect){
      exit('连接失败');
  }

  $query = mysqli_query($connect, $sql);
  if (!$query) {
       // exit('查询失败');
      return false;
  }

  //对于增删改类的操作都是查询受影响的行数
  $affected_rows = mysqli_affected_rows($connect);
  // mysqli_free_result($query);
  mysqli_close($connect);
  return $affected_rows; 
}









