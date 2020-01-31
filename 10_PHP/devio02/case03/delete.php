<?php

// 如何知道客户端删除那一条数据
// 通过客户端在URL地址中的问号参数的不同来辨别要删除的数据
// 找到要删除的数据
// 从原有的数据中删除数据
// 保存删除指定数据后的内容
// 返回列表页面
// echo $_GET['id'];
if (empty($_GET['id'])) {
	# code...
	//echo "没有传必要的参数";
	exit('<h1>必须指定参数</h1>');
}
$id = $_GET['id'];
$contents = file_get_contents('musics.json');
// echo $contents;
// $contents => JSON 格式化的字符串
// json_decode 默认反序列化时 将JSON中的对象转化为PHP中的·stdlass·类型的对象
// $data = json_decode($contents);
$data = json_decode($contents, true);
foreach ($data as $item) {
	# code...
	var_dump($item);
	if ($item['id'] !== $id) {
		# code...
		continue;
	}
	// $item => 我们要删除的那条数据
	$index = array_search($item, $data);
	// 先找出index 然后再去删除想要删除的数据
	array_splice($data, $index, 1);
	var_dump($data);
}
$json = json_encode($data);
file_put_contents('musics.json', $json);

// 跳转回列表页
header('Location: list.php');

// 'id' => string '5e062951d0115' (length=13)
// 'title' => string '泡沫-邓紫棋' (length=16)
// 'singer' => string '邓紫棋' (length=9)
// 'image' =>
//   array (size=2)
//     0 => string './uploads/5e062951cda09-dog01.jpg' (length=33)
//     1 => string './uploads/5e062951cdadf-dog02.jpg' (length=33)
// 'url' => string './uploads/5e062951cef0d-dengziqi_paomo.mp3' (length=42)
?>