<?php  
   
   // 载入配置文件
   // 设置默认时区为中国时区
   // date_default_timezone_set('PRC');
   require_once '../config.php'; 

   // 设置session过期时间
   // $lifeTime = 24*3600;
   // var_dump(date('Y-m-d H:i:s'));
   // var_dump(date('Y-m-d H:i:s', time()));
   // 设置过期时间为一天
   $lifeTime = 24*3600;
   // 设置session的过期时间方法一 session_set_cookie_params方法设置在 session_start()方法之前
   // session_set_cookie_params($lifeTime);
   // 开始session 给用于找箱子（如果你之前有就用之前的， 没有给个新的）

   // 设置session的过期时间方法二
   // $lifeTime = 24 * 3600;
   if (!session_id()){
      session_start();
   }
   // 方法二 可以准确的控制session的时间 比如设置$lifeTime为10，则在当前时间的10秒内不管做不做任何操作就会过期
   setcookie(session_name(), session_id(), time() + $lifeTime, "/");

   function login(){
      // 1. 接收并校验数据
      // 2. 持久化保存数据
      // 3. 发回响应结果
      if (empty($_POST['email'])) {
         $GLOBALS['message'] = '请填写邮箱';
         return;
      }
      if (empty($_POST['password'])) {
         $GLOBALS['message'] = '请填写密码';
         return;
      }
      
      $email = $_POST['email'];
      $password = $_POST['password'];
      
      // 当客户端提交过来的完整的表单信息就应该开始对其进行数据校验
      $connect = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);
      if (!$connect) {
          exit('<h1>链接数据库失败</h1>');
      }
      $query = mysqli_query($connect, "select * from users where email = '{$email}' limit 1;");
      if (!$query){
          $GLOBALS['message'] = '登录失败，请重试';
          return;
      }
      $user = mysqli_fetch_assoc($query);
      // var_dump($user);
      if (!$user){
          $GLOBALS['message'] = '邮箱与密码不匹配';
          return;
      }
      if ($user['password']!== $password ) {
          $GLOBALS['message'] = '密码不正确';
          return;
      }
      // 存一个登录标识
      // $_SESSION['is_logged_in'] = true;
      // 为了方便后期获取当前登录用户的信息 我们将用户添加到session中
      $_SESSION['current_login_user'] = $user;
      // 一切OK 就可以跳转到网站根目录
      header('Location: /admin/');
   }

   // 判断请求类型
   if ($_SERVER['REQUEST_METHOD']==='POST') {
       login();
   }

   if ($_SERVER['REQUEST_METHOD']==='GET' && isset($_GET['action']) && $_GET['action']==='logout') {
       // 删除session
       // 删除了登录标识
       unset($_SESSION['current_login_user']);
   }

?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Sign in &laquo; Admin</title>
  <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/static/assets/css/admin.css">
  <link rel="stylesheet" href="/static/assets/vendors/animate/animate.min.css">
</head>
<body>
  <div class="login">
    <!-- form 表单中添加novalidate就会关闭浏览器自带校验 
     autocomplete='off' 关闭自带的下拉记录
    -->
    <form class="login-wrap <?php echo isset($message)? 'animated shake': '';?>" 
    action="<?php echo $_SERVER['PHP_SELF'];?>" method="POST" novalidate autocomplete='off'>
      <img class="avatar" src="/static/assets/img/default.png">
      <?php if (isset($message)): ?>
          <!-- 有错误信息时展示 -->
         <div class="alert alert-danger">
             <strong>错误！</strong> <?php echo $message; ?>
         </div>
      <?php endif?>
      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input id="email" name="email" type="email" class="form-control" placeholder="邮箱" autofocus
           value="<?php echo empty($_POST['email'])? '': $_POST['email'] ?>" 
        >
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <!-- value 状态保持 -->
        <input id="password" name="password" type="password" class="form-control" placeholder="密码">
      </div>
      <button class="btn btn-primary btn-block">登 录</button>
    </form>
  </div>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script type="text/javascript">
     // 入口函数 
     $(function($){
        // 1. 单独作用域 
        // 2. 确保页面页面加载过后执行
        // 目标：在用户输入自己的邮箱过后，页面上展示这个邮箱对应的头像
        // 实现：
        // 时机：邮箱文本框失去焦点 
        // 事件：获取文本框中对应的头像地址 展示到上面的 img元素
        // 先写个正确的然后去改 admin@sina.com 然后逐步去修改
        var emailFormat = /[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/;
        $('#email').on('blur', function (argument) {
            // body...
            // this是dom对相 $(this)转化成jquery对相
            var value = $(this).val();
            // 忽略邮箱为空 或者 不是一个邮箱
            if (!value || !emailFormat.test(value)) return;
            // 判断是否是邮箱
            // console.log($(this).val());
            // 用户输入了一个合理的邮箱地址
            // 获取这个邮箱对应的头像地址 展示到上面的 img元素上
            // 因为客户端的 JS无法直接操作数据库 应该通过 JS发送 AJAX 请求 告诉服务端的某个接口
            // 让这个接口帮助客户端获取头像地址
            $.get('/admin/api/avatar.php', {"email": value}, function(res) {
                // body...  
                // 希望res拿到的是邮箱对应的头像地址
                if (!res) return;
                // $('.avatar').fadeOut().attr('src', res).fadeIn();
                $('.avatar').fadeOut(function (argument) {
                   // body...
                   // 等到淡出完毕  
                   // $(this).attr('src', res);
                   $(this).on('load', function (argument) {
                        // body...
                        // 图片完全加载结束完毕才淡入
                        $(this).fadeIn();
                   }).attr('src', res);
                })
            }); 
        });
     })
  </script>
</body>
</html>




