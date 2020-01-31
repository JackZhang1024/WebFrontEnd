<?php
/**
只有在表单提交时执行
 */
function add_music() {
	// 将用户提交过来的数据保存起来 musics.json
	// 1. 接收并校验
	// 2. 持久化
	// 3. 响应
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
	// var_dump($_FILES);
	if (!isset($_FILES['poster'])) {
		$GLOBALS['error_message'] = '请正确提交文件';
		return;
	}
	$poster = $_FILES['poster'];
	// var_dump($poster['error']);
	if ($poster['error'] !== UPLOAD_ERR_OK) {
		$GLOBALS['error_message'] = '请选择海报文件';
		return;
	}
	// 校验文件类型和大小
	$pic_type = $poster['type'];
	if (!($pic_type === 'image/png' || $pic_type === 'image/jpg' || $pic_type === 'image/jpeg')) {
		$GLOBALS['error_message'] = '上传的图片类型不正确';
		return;
	}
	// size 的单位是字节
	$pic_size = $poster['size'];
	// var_dump($pic_size);
	// 文件大小限制在 2M之内
	if ($pic_size > 1024 * 1024 * 2 || $pic_size < 1024 * 20) {
		# code...
		$GLOBALS['error_message'] = '上传的图片大小必须在30K到2M之间';
		return;
	}

	//文件已经上传成功 但还是在临时文件中 一般会将上传的文件重新命名
	$target_poster = './uploads/' . uniqid() . '-' . $poster['name'];
	if (!move_uploaded_file($poster['tmp_name'], $target_poster)) {
		# code...
		$GLOBALS['error_message'] = '上传海报失败';
		return;
	}
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
	// 上传和移动都已成功
	echo "上传音乐成功";

	// 音乐图片都上传成功
	$title = $_POST['title'];
	$singer = $_POST['singer'];
	$image = $target_poster;
	$source = $target_music;

	$contents = file_get_contents('musics.json');
	$origin = json_decode($contents, true);

	$origin[] = array('id' => uniqid(), 'title' => $title, 'singer' => $singer, 'image' => $image, 'url' => $source);
	$json = json_encode($origin);
	file_put_contents('musics.json', $json);

	// 跳转回列表页面
	header('Location: list.php');

}

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
                    <input type="file" name="poster" id="poster" class="form-control is-valid" accept="image/*">
                </div>
                <div class="from-group">
                    <label for="music">音乐</label>
                    <!--
                      accept 可以限制文件域能够选择的文件类型 值是 MIME Type image/jpeg image/jpeg
                      image/*(只要是图片类型都可以)
                      音乐类型 audio/*  所有类型的音频文件
                    -->
                    <input type="file" name="music" id="music" class="form-control is-valid" accept="audio/*">
                </div>
                <button class="btn-block btn-primary mt-3">保存</button>

            </form>
        </div>
    </body>
</html>