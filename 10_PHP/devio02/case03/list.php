<?php

$contents = file_get_contents('musics.json');
// echo $contents;
// $contents => JSON 格式化的字符串
// json_decode 默认反序列化时 将JSON中的对象转化为PHP中的·stdlass·类型的对象
// $data = json_decode($contents);
$data = json_decode($contents, true);
// echo $arr;
// var_dump($arr);
if (!$data) {
	# code...
	// JSON格式不正确
	exit('数据文件不正确');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>音乐列表</title>
	<link rel="stylesheet" href="bootstrap.css">
        <style>
              audio {
                outline: none;
              }
              img {
                width: 60px;
                height: 60px;
              }
        </style>
</head>
<body>
	<div class="container py-5">
        <h1 class="display-2">音乐列表</h1>
        <hr>
        <a href="add.php" class="btn btn-primary">添加</a>
        <table class="table table-bordered table-hover table-striped">
        	<thead class="thead-inverse">
        		<th>编号</th>
        		<th>标题</th>
        		<th>歌手</th>
        		<th>海报</th>
        		<th>音乐</th>
        		<th>操作</th>
        	</thead>

        	<tbody class="text-center">
        		<?php foreach ($data as $item): ?>
                                <!-- $item->title stdCalss的使用方法 -->
                        <tr>
                                <td><?php echo $item['id'] ?></td>
                                <td><?php echo $item['title'] ?></td>
                                <td><?php echo $item['singer'] ?></td>
                                <td>
                                    <?php foreach ($item['image'] as $image): ?>
                                         <img src="<?php echo $image; ?>" alt="">
                                    <?php endforeach?>

                                </td>
                                <td><audio src="<?php echo $item['url']; ?>" controls ></audio></td>
                                <!-- btn.btn.btn-danger -->
                                <!-- <td><button class="btn btn-danger">删除</button></td>  -->
                                <td>
                                    <a class="btn btn-danger btn-sm" href="delete.php?id=<?php echo $item['id']; ?>">删除</a>
                                </td>
                        </tr>
                        <?php endforeach?>

        	</tbody>

        </table>
	</div>
</body>
</html>