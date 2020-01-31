<?php
function upload() {
	// 判断是否有avatar属性
	if (!isset($_FILES['avatar'])) {
		// 客户端提交的表单中没有问价
		$GLOBALS['message'] = "逗我玩呢 没有上传文件";
		return;
	}
	$avatar = $_FILES['avatar'];
	// 判断是否有error错误 如果有 echo回去错误提示
	echo $avatar['error'];
	if ($avatar['error'] !== UPLOAD_ERR_OK) {
		// 服务端没有收到上传的文件
		$GLOBALS['message'] = "上传失败";
		echo "上传失败";
		return;
	}
	// 接收到了文件
	// 将文件从临时目录移动到网站范围之内 临时目录无法访问到
	// source 源文件 上传文件的临时文件
	$source = $avatar['tmp_name'];
	// 将临时文件存放到 upload文件中
	$target = './uploads/' . $avatar['name'];
	$moved = move_uploaded_file($source, $target);
	if (!$moved) {
		$GLOBALS['message'] = "移动文件失败";
		return;
	}
	// 移动成功 上传整个过程 OK
	echo "上传成功";
	// 	$avatar =>
	//     array (size=5)
	//       'name' => string '25601600.png' (length=12)
	//       'type' => string 'image/png' (length=9)
	//       'tmp_name' => string '/Applications/MAMP/tmp/php/php3SgYAB' (length=36)
	//       'error' => int 0
	//       'size' => int 2416171
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// 接收文件 使用一个叫做 $_FILES 超全局成员
	// var_dump($_POST);
	var_dump($_FILES);
	upload();
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>文件上传</title>
	</head>
	<body>
		<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method = "POST" enctype="multipart/form-data">
			姓名 <input type="text" name="username" id="">

			<input type="file" name="avatar" id="">
			<button>上传</button>
			<?php if (isset($message)): ?>
				<p style="color: hotpink"><?php echo $message ?></p>
			<?php endif?>
		</form>
	</body>
</html>



