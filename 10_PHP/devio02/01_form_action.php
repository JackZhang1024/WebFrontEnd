<?php
// 将表单的处理逻辑放在html之前，为了更灵活的控制html输出
// var_dump($_POST);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	// 请求的方式 是 POST 当前是点击产生的请求
	var_dump($_POST);
	echo "hello world";
}

?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>用户登录</title>
		<style>
			input {
				outline: none;
			}
		</style>
	</head>
	<body>
		<!-- 一般为了便于维护，我们将表单提交给当前页面本身 -->
		<!-- 超全局成员 -->
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
			<table>
				<tr>
					<td>用户名</td>
					<td><input type="text" name="usrname"></td>
				</tr>
				<tr>
					<td>密码</td>
					<td><input type="text" name="password"></td>
				</tr>
				<tr>
					<td></td>
					<td>
						<button>登录</button>
					</td>
				</tr>
			</table>
		</form>
	</body>

</html>