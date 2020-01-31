<?php  

  // 根据客户端传递过来的ID删除对应的数据
  require_once '../functions.php';

  if (empty($_GET['id'])) {
  	  exit('缺少必要参数');
  }
  // 防止SQL注入
  //$id = (int)$_GET['id'];
  $id = $_GET['id'];
  var_dump($id);
  // sql 注入 delete from categories where id =1 or 1 = 1; 会删除掉categories表中所有数据
  
  // $rows  = bx_execute("delete from categories where id ='{$id}'");
  $rows  = bx_execute('delete from posts where id in ('.$id.');');
  // if ($rows>0) {
        	
  // }

  //referer  http://baixiu.io/admin/posts.php?page=6
  // header('Location: /admin/posts.php');
  header('Location: '.$_SERVER['HTTP_REFERER']);
  