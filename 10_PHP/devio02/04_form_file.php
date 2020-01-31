<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// 接收文件 使用一个叫做 $_FILES 超全局成员
	var_dump($_FILES);
}

// 'img' =>
//     array (size=5)
//       'name' => string '25601600.png' (length=12)
//       'type' => string 'image/png' (length=9)
//       'tmp_name' => string '/Applications/MAMP/tmp/php/php3SgYAB' (length=36)
//       'error' => int 0
//       'size' => int 2416171

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<!-- 如果一个表单中有文件域（文件上传）必须将表单的 method 设置为 post enctype 设置为 multipart/form-data -->
	<!--  -->
	<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
  <!--      <input type="text" name="foo" id="">
       <input type="text" name="bar" id=""> -->
       <input type="file" name="img" id="">
       <button>提交</button>
	</form>
</body>
</html>