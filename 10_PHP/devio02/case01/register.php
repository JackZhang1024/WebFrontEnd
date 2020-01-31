<?php

// 接收用户提交的数据 保存文件
// 1. 接收并校验
// 2. 持久化
// 3. 响应

function postback() {

	// 申明 $message 是全局
	global $message;

	// 超全局关联数组
	// $GLOBALS['message'] = ”会不会用, 用户名为空“;

	if (empty($_POST['username'])) {
		// 没有提交用户名 或 用户名为空
		// echo "会不会用, 用户名为空";
		$message = "会不会用, 用户名为空";
		return;
	}
	if (empty($_POST['password'])) {
		// 没有提交用户名 或 用户名为空
		$message = "会不会用, 密码为空";
		return;
	}
	if (empty($_POST['confirm'])) {
		// 没有提交用户名 或 用户名为空
		$message = "会不会用, 确认密码为空";
		return;
	}

	if ($_POST['password'] !== $_POST['confirm']) {
		$message = "两次输入的密码不一致";
		return;
	}
	if (!(isset($_POST['agree']) && $_POST['agree'] === 'on')) {
		# code...
		$message = "必须同意注册协议";
		return;
	}
	// 所有校验都通过
	$username = $_POST['username'];
	$password = $_POST['password'];
	// var_dump($username);
	// $message = "1212";
	// 将数据保存到文本文件中
	// FILE_APPEND
	file_put_contents('users.txt', $username . '|' . $password . "\n", FILE_APPEND);
	$message = "注册成功";
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	postback();
}

?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>注册</title>
		<style>
			input {
				outline: none;
			}
		</style>
	</head>
	<body>
		<form action="<?php echo $_SERVER['PHP_SELF'] ?>" method="POST">
			<table border="1">
				<tr>
					<td><label for="username">用户名</label></td>

					<!-- 处理显示数据默认填写功能 -->
					<td><input type="text" name="username" id="username"
						value="<?php echo isset($_POST['username']) ? $_POST['username'] : ''; ?>">
					</td>
				</tr>
				<tr>
					<td><label for="password">密码</label></td>
					<td><input type="password" name="password" id="password"></td>
				</tr>
				<tr>
					<td><label for="confirm">确认密码</label></td>
					<td><input type="password" name="confirm" id="confirm"></td>
				</tr>

				<tr>
					<td></td>
					<td><label for="agree"><input type="checkbox" name="agree" id="agree">同意注册协议</label></td>
				</tr>

                <?php if (!empty($message)): ?>
                	<tr>
					<td></td>
					<td><?php echo $message ?></td>
				</tr>
                <?php endif?>

				<tr>
					<td></td>
					<td><button>注册</button></td>
				</tr>


			</table>
		</form>
	</body>
</html>