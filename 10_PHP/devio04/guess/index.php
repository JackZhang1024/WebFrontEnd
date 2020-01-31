<?php

if (empty($_COOKIE['num'])) {
	$num = rand(0, 100);
	setcookie('num', $num);
    setcookie('count', 0);
	var_dump($num);

} else {
    var_dump($_COOKIE);
	$count = !isset($_COOKIE['count']) ? 0 : (int) $_COOKIE['count'];
	if ($count < 3) {
		// 每进来一次 便是猜一次
		$result = (int) $_POST['num'] - (int) $_COOKIE['num'];
		if ($result == 0) {
			$message =  '您猜对了';
			// setcookie('num');清除cookie
			setcookie('num');
			setcookie('count');
		} else if ($result > 0) {
			$message = '您猜大了';
		} else {
			$message ='您猜小了';
		}
        var_dump($count+1);
		setcookie('count', $count + 1);
        var_dump($_COOKIE['count']);
	} else {
		$message='游戏结束了';
	}
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>猜数字</title>
    <style>
    body {
        padding: 100px 0;
        background-color: #2b3b49;
        color: #fff;
        text-align: center;
        font-size: 2.5em;
    }
    input {
        padding: 5px 20px;
        height: 50px;
        background-color: #3b4b59;
        border: 1px solid #c0c0c0;
        box-sizing: border-box;
        color: #fff;
        font-size: 20px;
    }
    button {
        padding: 5px 20px;
        height: 50px;
        font-size: 16px;
    }
    </style>
  </head>
  <body>
    <h1>猜数字游戏</h1>
    <p>Hi，我已经准备了一个0~100的数字，你需要在仅有的10机会之内猜对它。</p>
    <?php if (isset($message)): ?>
          <p><?php echo $message;?></p>
    <?php endif ?>
    <form action="index.php" method="post">
        <input type="number" min="0" max="100" name="num" placeholder="随便猜">
        <button type="submit">试一试</button>
    </form>
  
   
  </body>

</html>