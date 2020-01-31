<?php
/**
只有在表单提交时执行
方法有主 函数没主
 */
function add_music() {
	// 将用户提交过来的数据保存起来 musics.json
	// 1. 接收并校验
	// 2. 持久化
	// 3. 响应
	// 准备一个空的容器 用来装最终要保存的 数据
	$data = array();

	if (empty($_POST['title'])) {
		# code...
		$GLOBALS['error_message'] = '请输入标题';
		return;
	}
	if (empty($_POST['singer'])) {
		# code...
		$GLOBALS['error_message'] = '请输入歌手';
		return;
	}
	$data['title'] = $_POST['title'];
	$data['singer'] = $_POST['singer'];
	$data['images'] = array();
	// var_dump($_FILES);
	if (!isset($_FILES['posters'])) {
		$GLOBALS['error_message'] = '请正常使用表单';
		return;
	}
	$posters = $_FILES['posters'];
	// var_dump($poster['error']);
	// 这块要处理多张图片 使用for 循环处理
	for ($i = 0; $i < count($posters['name']); $i++) {
		# code...
		if ($posters['error'][$i] !== UPLOAD_ERR_OK) {
			# code...
			$GLOBALS['error_message'] = '上传海报文件';
			return;
		}
		// 校验文件类型和大小
		$pic_type = $posters['type'][$i];
		if (!($pic_type === 'image/png' || $pic_type === 'image/jpg' || $pic_type === 'image/jpeg')) {
			$GLOBALS['error_message'] = '上传的图片类型不正确';
			return;
		}
		// size 的单位是字节
		$pic_size = $posters['size'][$i];
		// var_dump($pic_size);
		// 文件大小限制在 2M之内
		if ($pic_size > 1024 * 1024 * 2 || $pic_size < 1024 * 10) {
			# code...
			$GLOBALS['error_message'] = '上传的图片大小必须在10K到2M之间';
			return;
		}
		// 通过类型和文件大小校验
		//文件已经上传成功 但还是在临时文件中 一般会将上传的文件重新命名
		$target_poster = './uploads/' . uniqid() . '-' . $posters['name'][$i];
		if (!move_uploaded_file($posters['tmp_name'][$i], $target_poster)) {
			# code...
			$GLOBALS['error_message'] = '上传海报失败';
			return;
		}
		$data['images'][] = $target_poster;
	}
	var_dump($data);
	// 上传和移动都已成功
	echo "上传海报成功";
	// 校验音乐类型
	if (!isset($_FILES['music'])) {
		$GLOBALS['error_message'] = '请正确提交音乐文件';
		return;
	}
	$music = $_FILES['music'];
	$music_type = $music['type'];
	if ($music['error'] !== UPLOAD_ERR_OK) {
		$GLOBALS['error_message'] = '请选择海报文件';
		return;
	}
	$allowed_types = array('audio/mp3', 'audio/wma');
	if (!in_array($music_type, $allowed_types)) {
		# code...
		$GLOBALS['error_message'] = '上传的音乐类型不正确,必须是mp3或者wma类型';
		return;
	}
	var_dump($music);
	$target_music = './uploads/' . uniqid() . '-' . $music['name'];
	if (!move_uploaded_file($music['tmp_name'], $target_music)) {
		# code...
		$GLOBALS['error_message'] = '上传音乐失败';
		return;
	}
	$data['url'] = $target_music;
	// 上传和移动都已成功
	echo "上传音乐成功";
	// 音乐图片都上传成功
	$title = $data['title'];
	$singer = $data['singer'];
	$image = $data['images'];
	$source = $data['url'];
	$contents = file_get_contents('musics.json');
	$origin = json_decode($contents, true);
	$origin[] = array('id' => uniqid(), 'title' => $title, 'singer' => $singer, 'image' => $image, 'url' => $source);
	$json = json_encode($origin);
	file_put_contents('musics.json', $json);
	// 跳转回列表页面
	header('Location: list.php');

}
// 'posters' =>
//    array (size=5)
//      'name' =>
//        array (size=2)
//          0 => string 'dog01.jpg' (length=9)
//          1 => string 'dog02.jpg' (length=9)
//      'type' =>
//        array (size=2)
//          0 => string 'image/jpeg' (length=10)
//          1 => string 'image/jpeg' (length=10)
//      'tmp_name' =>
//        array (size=2)
//          0 => string '/Applications/MAMP/tmp/php/phppM8k2r' (length=36)
//          1 => string '/Applications/MAMP/tmp/php/phpXl28wb' (length=36)
//      'error' =>
//        array (size=2)
//          0 => int 0
//          1 => int 0
//      'size' =>
//        array (size=2)
//          0 => int 79500
//          1 => int 20517
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// var_dump($_FILES);
	add_music();
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>音乐列表</title>
		<link rel="stylesheet" href="bootstrap.css">
	</head>
	<body>
		<div class="container mt-5">
			<h1 class="display-2">添加音乐</h1>
			<hr>
			<?php if (isset($error_message)): ?>
			<div class="alert  alert-danger" role="alert">
				<?php echo $error_message ?>
			</div>
			<?php endif?>
			<!-- 如果表单域中有文件域 那么就必须添加encytype -->
			<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST" enctype="multipart/form-data">
				<div class="from-group">
					<label for="title">标题</label>
					<input type="text" name="title" id="title" class="form-control is-valid">
					<small class="form-text">请输入音乐标题</small>
				</div>
				<div class="from-group">
					<label for="singer">歌手</label>
					<input type="text" name="singer" id="singer" class="form-control is-valid">
					<small class="form-text">请输入歌手名字</small>
				</div>
				<div class="from-group">
					<label for="poster">海报</label>
					<!-- 添加multiple属性这样就可以进行多选操作了 -->
					<!-- 给name属性对应的值加上[] 就可以一次上传多张图片了 -->
					<input type="file" name="posters[]" id="poster" class="form-control is-valid"
					accept="image/*" multiple>
				</div>
				<div class="from-group">
					<label for="music">音乐</label>
					<!--
					accept 可以限制文件域能够选择的文件类型 值是 MIME Type image/jpeg image/jpeg
					image/*(只要是图片类型都可以)
					音乐类型 audio/*  所有类型的音频文件
					也可以写指定的扩展名 如 accept=".lrc, .txt"
					-->
					<input type="file" name="music" id="music" class="form-control is-valid" accept="audio/*">
				</div>
				<button class="btn-block btn-primary mt-3">保存</button>
			</form>
		</div>
	</body>
</html>