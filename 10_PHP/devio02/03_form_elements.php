<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	var_dump($_POST);
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<title>表单</title>
	</head>
	<body>
		<form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="POST">
			<!--    <input type="text" name="key1" id="">
			<input type="password" name="" id=""> -->
			<!-- 单选操作 -->
			性别
			<!-- 当表单中使用了 radio 一定要为相同的name的radio 设置不同的 value 让服务端可以辨别 -->
			<label>
				<input type="radio" name="gender" id="" value="male">男
			</label>
			<label>
				<input type="radio" name="gender" id="" value="female">女
			</label>
			<br>
			<!-- checkbox 如果没有选中 则不会提交 如果选中则会提交 -->
			<label>
				<input type="checkbox" name="agree" id="" value="true">同意协议
			</label>
			<br>
			<!-- 多选问题 怎么处理 -->
			<!-- 如果想在 -->
			<label><input type="checkbox" name="funs[]" id="" value="basketball">篮球</label>
			<label><input type="checkbox" name="funs[]" id="" value="football">足球</label>
			<label><input type="checkbox" name="funs[]" id="" value="earth">地球</label>
			<br>
			<!-- 下拉框 -->
			<!-- 如果没有value 则传的是innerText 如果有value 则传的是value的内容-->
			<select name="status" id="">
				<option >激活</option>
				<option >未激活</option>
				<option >待激活</option>
			</select>
			<br>
			<select name="city" id="">
				<option value="shanghai">上海</option>
				<option value="beijing">北京</option>
				<option value="shenzhen">深圳</option>
			</select>
			<br>
			<button>提交</button>

		</form>
	</body>
</html>