<?php

$contents = file_get_contents('musics.json');
// echo $contents;
// $contents => JSON 格式化的字符串
$arr = json_decode($contents, true);
// echo $arr;
var_dump($arr);

?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>音乐列表</title>
	<link rel="stylesheet" href="bootstrap.css">
</head>
<body>
	<div class="container py-5">
        <h1 class="display-2">音乐列表</h1>
        <hr>
        <a href="" class="btn btn-primary">添加</a>
        <table class="table table-bordered table-hover table-striped">
        	<thead class="thead-inverse">
        		<th>编号</th>
        		<th>标题</th>
        		<th>歌手</th>
        		<th>海报</th>
        		<th>音乐</th>
        		<th>操作</th>
        	</thead>

        	<tbody>
        		<tr>
        			<td>213287887782388</td>
        			<td>错过</td>
        			<td>李白</td>
        			<td><img src="" alt=""></td>
        			<td><audio src="" controls=""></audio></td>
                                <!-- btn.btn.btn-danger -->
        			<td><button class="btn btn-danger">删除</button></td>
        		</tr>
        		<tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
                        <tr>
                                <td>213287887782388</td>
                                <td>错过</td>
                                <td>李白</td>
                                <td><img src="" alt=""></td>
                                <td><audio src="" controls=""></audio></td>
                                <td><button class="btn btn-danger">删除</button></td>
                        </tr>
        	</tbody>

        </table>
	</div>
</body>
</html>