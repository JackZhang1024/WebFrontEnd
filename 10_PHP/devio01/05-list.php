<?php 
  
  // 将文本文件中的内容呈现到一个表格中
  // 1. 读取文件内容 包含文本内容的字符串
  $contents = file_get_contents('names.txt');
  // 2. 按照一个特定的规则解析文件内容  
  $data = array();
  // 注意这里用双引号
  $lines = explode("\n", $contents);
  // 2.2 遍历每一行分别解析每一行中的数据
  // 索引数组
  foreach ($lines as $value) {
  	if ($value === '') continue;
  	# #value =  '0004 张三|男|北京|28|18210575534'
    // $cols => []
    // exploe('|', $value) 注意分割线用 | 来分割 
    $data[]  = explode('|', $value);
    // $data = [[], []] 将每次通过分割得到的数组放到data数组中

    
  }
  // var_dump($lines);
  // 3. 通过混编的方式将数据呈现到表格中
  // var_dump($data);
  
?>

<!-- html 输入tab 键就出来了html模板内容 -->
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<title>全部人员信息表</title>
</head>
<body>
    <h1>全部人员信息表</h1>
    <table>
    	<thead>
    		<tr>
    			<th>编号姓名</th>
    			<th>性别</th>
    			<th>籍贯</th>
    			<th>年龄</th>
    			<th>手机号</th>
    		</tr>
    	</thead>
    	<tbody>
    		  <?php foreach ($data as $line): ?>
             <tr>
               <?php foreach ($line as $col): ?>
                  
                   <?php $col = trim($col); ?>
                   <!-- 检查col的变量内容 -->
                   <!--  <?php var_dump($col); ?> -->
                   <!-- 判断这里的数字是不是网址 -->
                   <?php if (strpos($col, 'http://') === 0): ?>
                     <td><a href="<?php echo strtolower($col); ?>"><?php echo substr($col, 7);?></a></td>
                    <?php else: ?>
                        <td><?php echo $col ?></td>
                   <?php endif ?>

               <?php endforeach ?>
             </tr>
          <?php endforeach ?>
    	</tbody>
    </table>
</body>
</html>