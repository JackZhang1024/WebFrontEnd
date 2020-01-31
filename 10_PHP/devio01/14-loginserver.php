<?php
var_dump($_GET);
var_dump($_GET['usrname']);
var_dump($_GET['password']);
// $_GET  用于接收 URL 地址中的提交的数据  （一般是GET 参数）
var_dump($_POST);
// $_POST 用于接收 请求体 地址中的提交的数据  （一般是POST 参数）
var_dump($_REQUEST);

// $_REQUEST = $_GET+ $_POST

?>