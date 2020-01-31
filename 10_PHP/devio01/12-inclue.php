<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>

	<!-- require特点 一旦被载入了文件不存在 就会发生致命错误 不再往下执行-->
	<!-- include特点 载入的文件不存在不会报错误（会有警告 警告不用管） 后面的还会继续执行 -->
	<?php include 'aside2.php';?>
	<main>
	  另外的区域
	</main>
</body>
</html>