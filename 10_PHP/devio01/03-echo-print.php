<?php

echo 'value', 'value2';

// print 智能打印一个数据
//print 'value', 'value2';

echo false;
// 一般调试的时候用于输出数据以及数据类型

var_dump('value');
var_dump(true);
var_dump(false);

var_dump(array(1, 2, 3));


$arr = [1, 2, 3, 4];
foreach ($arr as $item) {
    echo $item;
}


$assoc = ['key1' => 'value1', 'key2' => 'value2', 'key3' => 'value3'];
foreach ($assoc as $index => $item) {
    echo $index, $item;
}

echo "  hahah   ";
echo trim("  hahah   ");





