<?php

// 只要有人请求我 意味着这个人不想再看到广告
// 我们给这个人开张票
setcookie('hide_ad', '1');
header('Location: index.php');
?>