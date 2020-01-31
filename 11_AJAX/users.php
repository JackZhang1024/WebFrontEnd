<?php 
  // 返回的响应就是一个 JSON内容
  // 对于返回数据的地址一般我们称之为接口
  // users.php?id=1 id为1的用户信息
  $data = array(
      array('id' =>1, 'name'=>'张三', 'age'=>12),
      array('id' =>2, 'name'=>'李四', 'age'=>13),
      array('id' =>3, 'name'=>'王五', 'age'=>14),
      array('id' =>4, 'name'=>'赵六', 'age'=>12),
      array('id' =>5, 'name'=>'马七', 'age'=>15),
      array('id' =>6, 'name'=>'高八', 'age'=>16),
  );

  if (empty($_GET['id'])) {
  	  // 没有ID 获取全部
  	  // 因为HTTP中的约定报文内容就是字符串
  	  // 我们需要给客户端的信息是一个有结构的数据
  	  // 这种情况下 我们一般采用JSON作为数据格式
      $json = json_encode($data); // [{'id':1, 'name':'张三'}, {...}]
      echo $json;      
  } else {
     foreach ($data as $item) {
     	 if ($item['id']!=$_GET['id']) continue;
     	 $json = json_encode($item);
     	 echo $json;
     }
  }


?>