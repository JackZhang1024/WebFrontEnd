<?php  
   // 校验数据当前访问用户的箱子 (session) 有没有登录的登录标识
   require_once '../functions.php';
   // 判断用户是否登录一定是最先执行
   bx_get_current_user();
   // 获取界面所需要的数据
   // 文章总数
   $posts_count = bx_fetch_one('select count(1) as num from posts;')['num'];
   // 文章草稿
   $posts_draft_count = bx_fetch_one("select count(1) as num from posts where status='drafted'")['num'];
   // 分类
   $categories_count  = bx_fetch_one('select count(1) as num from categories;')['num'];
   // 评论
   $comments_count    = bx_fetch_one('select count(1) as num from comments;')['num'];
   // 评论待审
   $comments_held     = bx_fetch_one("select count(1) as num from comments where status='held'")['num'];
?>
<!DOCTYPE html>
<html lang="zh-CN">

<head>
    <meta charset="utf-8">
    <title>Dashboard &laquo; Admin</title>
    <link rel="stylesheet" href="/static/assets/vendors/bootstrap/css/bootstrap.css">
    <link rel="stylesheet" href="/static/assets/vendors/font-awesome/css/font-awesome.css">
    <link rel="stylesheet" href="/static/assets/vendors/nprogress/nprogress.css">
    <link rel="stylesheet" href="/static/assets/css/admin.css">
    <link rel="stylesheet" type="text/css" href="/static/assets/vendors/chartjs/Chart.css">
    <script src="/static/assets/vendors/nprogress/nprogress.js"></script>
</head>

<body>
    <script>
    NProgress.start()
    </script>    
    <div class="main">
        <?php include 'inc/navbar.php'; ?>
        <div class="container-fluid">
            <div class="jumbotron text-center">
                <h1>One Belt, One Road</h1>
                <p>Thoughts, stories and ideas.</p>
                <p><a class="btn btn-primary btn-lg" href="post-add.php" role="button">写文章</a></p>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <h3 class="panel-title">站点内容统计：</h3>
                        </div>
                        <ul class="list-group">
                            <li class="list-group-item"><strong><?php echo $posts_count; ?></strong>篇文章（<strong><?php echo $posts_draft_count; ?></strong>篇草稿）</li>
                            <li class="list-group-item"><strong><?php echo $categories_count; ?></strong>个分类</li>
                            <li class="list-group-item"><strong><?php echo $comments_count; ?></strong>条评论（<strong><?php echo $comments_held;?></strong>条待审核）</li>
                        </ul>
                    </div>
                </div>
                <div class="col-md-4">
                  <canvas id="chart">
                    
                  </canvas>
                </div>
                <div class="col-md-4">
                  
                </div>
            </div>
        </div>
    </div>
    
    <?php $current_page = 'index';?>
    <?php include 'inc/sidebar.php';?>

    <script src="/static/assets/vendors/jquery/jquery.js"></script>
    <script src="/static/assets/vendors/bootstrap/js/bootstrap.js"></script>
    <script src="/static/assets/vendors/chartjs/Chart.js"></script>
    <!-- 柱状图 -->
    <!-- <script type="text/javascript">
      var ctx = document.getElementById('chart').getContext('2d');
      var myChart = new Chart(ctx, {
              type: 'bar',
              data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
    });
    </script> -->

   
    <script type="text/javascript">
      var ctx = document.getElementById('chart').getContext('2d');
      var myChart = new Chart(ctx, {
              type: 'pie',
              data: {
                labels: ['文章', '分类', '评论'],
                datasets: [{
                    label: '# of Votes',
                    data: [
                    <?php echo $posts_count;?>, 
                    <?php echo $categories_count;?>,
                    <?php echo $comments_count;?>],
                    backgroundColor: [
                        'hotpink',
                        'pink',
                        'deeppink'
                    ]
                }
              ],
            },
            options: {
               
            }
    });
    </script>
    <script>
    NProgress.done()
    </script>
</body>

</html>