为了规范代码风格，可以采用以下代码风格规范
-[JavaScript Standard Style](https://standardjs.com)
-Airbnb JavaScript Style

服务端渲染 页面刷新
客户端渲染 页面不刷新

客户端渲染 AJAX渲染的数据 不利于爬虫抓取
服务端渲染 数据容易被爬虫抓取
真正的网站是客户端和服务端渲染出来的，不是单纯的某一种
例如：京东的商品列表就采用的是服务端渲染，目的是为了SEO搜索引擎优化
而它的商品列表为了用户体验，而且也不需要SEO优化，所以采用的是客户端渲染


如何通过服务器让客户端重定向？
   statusCode
1. 状态吗设置为302 临时重定向
2. 在响应头中通过Location 告诉客户端往哪儿重定向
   setHeader

 response.statusCode = 302
 // 重定向到网站首页/
 response.setHeader('Locaton', '/')
 response.end();  



