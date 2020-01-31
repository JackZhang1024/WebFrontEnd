<?php 
  require_once '../functions.php';
  bx_get_current_user();


  if (!empty($_GET['id'])) {
      // 客户端通过URL传递一个ID参数 意味着客户端是要过哪一个修改数据表单
      // 需要拿到用户想要修改的数据
      $current_edit_category = bx_fetch_one('select * from categories where id ='.$_GET['id']);
  }

  function add_category(){
    // 校验 持久化 响应
    if (empty($_POST['name']) || empty($_POST['slug'])) {
        $GLOBALS['message'] = '请完整填写表单!';
        $GLOBALS['success'] = false;      
        return;
    }
    $name = $_POST['name'];
    $slug = $_POST['slug'];
  
    $rows = bx_execute("insert into categories values (null, '{$slug}', '{$name}');");
    // if ($rows <=0 ) {
    //     $GLOBALS['message'] = '添加失败!';    
    //     return;
    // }
    $GLOBALS['success'] = $rows > 0;      
    $GLOBALS['message'] = $rows<=0? '添加失败!': '添加成功';
  }

  function edit_category() {
    global $current_edit_category;
    // 只有当是编辑并点击保存
    // if (empty($_POST['name']) || empty($_POST['slug'])) {
    //     $GLOBALS['message'] = '请完整填写表单!';
    //     $GLOBALS['success'] = false;      
    //     return;
    // }

    $name = empty($_POST['name'])? $current_edit_category['name']: $_POST['name'];
    $current_edit_category['name'] = $name;
    $slug = empty($_POST['slug'])? $current_edit_category['slug']: $_POST['slug'];
    $current_edit_category['slug'] = $slug;
    $id   = $current_edit_category['id'];
    $rows = bx_execute("update categories set slug='{$slug}', name='{$name}' where id ='{$id}';");
    // if ($rows <=0 ) {
    //     $GLOBALS['message'] = '添加失败!';    
    //     return;
    // }
    $GLOBALS['success'] = $rows > 0;      
    $GLOBALS['message'] = $rows<=0? '保存失败!': '保存成功';
  }


  // 如果修改操作与查询操作在一起 一定是先做修改再去查询
  if ($_SERVER['REQUEST_METHOD']==='POST'){
      // 一旦表单提交请求并且没有通过URL提交 ID就意味着要添加数据
      if (empty($_GET['id'])) {
          add_category();
      } else{
          edit_category();
      }
  }

  // 查询到所有的分类数据
  $categories =  bx_fetch_all('select * from categories;');
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Categories &laquo; Admin</title>
  <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="/static/assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="/static/assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="/static/assets/css/admin.css">
  <script src="/static/assets/vendors/nprogress/nprogress.js"></script>
</head>
<body>
  <script>NProgress.start()</script>

  <div class="main">
    <nav class="navbar">
      <button class="btn btn-default navbar-btn fa fa-bars"></button>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="profile.php"><i class="fa fa-user"></i>个人中心</a></li>
        <li><a href="login.php"><i class="fa fa-sign-out"></i>退出</a></li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="page-title">
        <h1>分类目录</h1>
      </div>
      <?php if (isset($message)): ?>
          <!-- 有错误信息时展示 -->
          <div class="alert <?php echo $success? 'alert-success':'alert-danger';?>">
            <strong><?php echo $success? '恭喜你':'错误!'; ?></strong><?php echo $message;?> 
          </div>

      <?php endif ?>
      <div class="row">
        <div class="col-md-4">
          <?php if (isset($current_edit_category)): ?>
             <form action="<?php echo $_SERVER['PHP_SELF'];?>?id=<?php echo $current_edit_category['id'];?>" method= 'POST' >
                  <h2>编辑 <?php echo $current_edit_category['name']; ?> </h2>
                  <div class="form-group">
                    <label for="name">名称</label>
                    <input id="name" class="form-control" name="name" type="text" placeholder="分类名称" value="<?php echo $current_edit_category['name']; ?>">
                  </div>
                  <div class="form-group">
                    <label for="slug">别名</label>
                    <input id="slug" class="form-control" name="slug" type="text" placeholder="slug" value="<?php echo $current_edit_category['slug'];?>">
                    <p class="help-block">https://zce.me/category/<strong>slug</strong></p>
                  </div>
                  <div class="form-group">
                    <button class="btn btn-primary" type="submit">保存</button>
                  </div>
          </form>
          <?php else: ?>
            <form action="<?php echo $_SERVER['PHP_SELF'];?>" method= 'POST' >
                <h2>添加新分类目录</h2>
                <div class="form-group">
                  <label for="name">名称</label>
                  <input id="name" class="form-control" name="name" type="text" placeholder="分类名称">
                </div>
                <div class="form-group">
                  <label for="slug">别名</label>
                  <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
                  <p class="help-block">https://zce.me/category/<strong>slug</strong></p>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary" type="submit">添加</button>
                </div>
          </form>
          <?php endif ?> 
        </div>
        <div class="col-md-8">
          <div class="page-action">
            <!-- show when multiple checked -->
            <a id='btn_delete' class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
          </div>
          <table class="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th class="text-center" width="40"><input type="checkbox"></th>
                <th>名称</th>
                <th>Slug</th>
                <th class="text-center" width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($categories as $item): ?>
                <tr>
                    <td class="text-center"><input type="checkbox" data-id="<?php echo $item['id'];?>"></td>
                    <td><?php echo $item['name'];?></td>
                    <td><?php echo $item['slug'];?></td>
                    <td class="text-center">
                        <a href="categories.php?id=<?php echo $item['id'];?>" class="btn btn-info btn-xs">编辑</a>
                        <a href="category-delete.php?id=<?php echo $item['id'];?>" class="btn btn-danger btn-xs">删除</a>
                    </td>
                </tr>
              <?php endforeach ?>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <?php $current_page = 'categories';?>
  <?php include 'inc/sidebar.php'; ?>

  <script src="/static/assets/vendors/jquery/jquery.js"></script>
  <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script type="text/javascript">
      $(function($){
        // 在表格的任意一个 checkbox 选中状态变化时
        //  // 变量本地化
        //  // 1. 不要重复使用无意义的选择器 
        var $tbodyCheckBox = $('tbody input');
        var $btnDelete  = $('#btn_delete');
        // 版本二 定义一个数组 
        var allCheckeds = [];
        $tbodyCheckBox.on('change', function () {
             // body...
             // this.dataset['id']
             console.log($(this).attr('data-id'));
             console.log($(this).data('id'));
             var id = $(this).data('id');
             // 根据有没有选中当前这个checkbox 决定是添加还是删除
             if ($(this).prop('checked')) {
                 // allCheckeds.includes(id) 为true 就不执行后面的语句了
                 allCheckeds.includes(id) || allCheckeds.push(id); 
             } else {
                 allCheckeds.splice(allCheckeds.indexOf(id),1);
             }
             console.log(allCheckeds);
             allCheckeds.length ? $btnDelete.fadeIn(): $btnDelete.fadeOut();
            
             $btnDelete.attr('href', '/admin/category-delete.php?id='+allCheckeds);
        });
        // 版本一
        // $tbodyCheckBox.on('change', function() {
        //   // 有任意一个CheckBox选中就显示 反之隐藏
        //   // prop 和 attr 区别 
        //   // attr 访问到的是元素属性 
        //   // prop 访问到的是DOM属性 在标签上看不到的全部
        //   var flag = false;
        //   $tbodyCheckBox.each(function(i, item) {
        //       // attr 元素属性 
        //       // prop dom属性
        //       // 元素属性和DOM属性不一样的
        //       // 没写就没有改属性
        //       // console.log($(item).prop('checked'));
        //       if ($(item).prop('checked')) {
        //          flag = true;
        //       }
        //     });
        //   flag? $btnDelete.fadeIn(): $btnDelete.fadeOut();
        // });  

      }); 
  </script>
  <script>NProgress.done()</script>
</body>
</html>
