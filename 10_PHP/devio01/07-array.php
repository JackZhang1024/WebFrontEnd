<?php 
    
    // 类型 1. 索引数组 2.关联数组
    // 方式 1. array  2. []
    $dict = array(
    	'hello' => '你好', 
    	'world' => '世界',
    	'girls' => '女孩',
    );


    array_keys($dict);
    // ['hello', 'world', 'girls']
    var_dump(array_values($dict));
    // ['hello', 'world', 'girls']
    var_dump(array_key_exists('hello', $dict));
	var_dump(array_key_exists('hello2', $dict));
	var_dump($dict['hello']);
    // php.ini 中 display_errors = on 显示错误  off 不显示错误
    // isset 
    if (isset($dict['foo'])){
        echo $dict['foo']; 
    } else {
        echo "没有"; 
    }
    
    // 下面的语句是等价的 
    // empty($dict['foo']) === !isset($dict['foo']) || $dict['foo'] == false
    if (empty($dict['foo'])) {
    	# code...
    	echo "没有";
    } else {
    	echo $dict['foo'];
    }

    // public function empty($input){
    // 	# code...
    // 	return !isset($input) || $input ==false;
    // }

    // array_push(array, var)
    // array_pop(array)
    // array_search(needle, haystack)
    $arr = array(10, 20);
    var_dump($arr);
    foreach ($arr as $value) {
        # code...
        echo $value;
    }


 ?>