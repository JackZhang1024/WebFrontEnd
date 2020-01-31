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
		<!--
		1. 必须有 form标签  input必须有 name 属性
		2. from 必须执行 action 和 method （method 分为 GET 或者 POST）
		不设置 action 默认是当前页面 （必须设置，应为兼容）
		不设置 method 默认是 get
		3. input 表单元素（表单域）必须有 name (如果希望被提交的情况)
		3. 提交按钮 input:submit image 或者 button标签
		-->
		<form action="14-loginserver.php" method="GET">
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
				     <!-- iput:submit image -->
					<!-- <input type="image" value="登录"> -->
					<td>
						<button>登录</button>
					</td>
				</tr>
			</table>
		</form>
	</body>
</html>