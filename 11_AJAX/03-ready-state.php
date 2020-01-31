<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>readyState</title>
</head>
<body>
	 <script>
	 	var xhr = new XMLHttpRequest();
	 	// =>0 初始化 请求代理对象
	 	console.log(xhr.readyState);
	 	xhr.open('GET', './time.php');
	 	// =>1 open方法已经调用 建立一个与服务端特定端口的链接
	 	console.log(xhr.readyState);
	 	xhr.send();
	 	console.log(xhr.readyState);
	 	xhr.addEventListener('readystatechange', function(){
           
            switch(this.readyState){
               case 2:
                  // 已经接受到了响应报文的响应头 
                  // 可以拿到头 
  				  console.log(this.getAllResponseHeaders());
  				  // 但是还没有拿到体
  				  console.log(this.responseText); 
                  break;
               case 3:
                  // 响应体加载中  
               	  // console.log(this.readyState); 
               	  console.log(this.responseText);
                  break;
               case 4:
                  // => 4 一切OK 
                  console.log("Done");
 				          // console.log(this.readyState); 
 				          console.log(this.responseText);
                  break;
             }
	 	});
	 </script>
</body>
</html>