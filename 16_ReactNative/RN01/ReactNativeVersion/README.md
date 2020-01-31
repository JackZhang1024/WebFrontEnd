如何使用指定版本来创建ReactNative项目
react-native init demo --verbose --version 0.57.8
--verbose 可以在创建项目的过程中查看下载了哪些包 执行进度
--version xxx 后面跟的是指定的reactnative版本号

因为ReactNative版本更新很快，在创建项目的时候会出现一些不兼容的问题，
所以会指定一个相对稳定的版本来开发，默认情况下 不加版本version时，
会使用最新的版本来创建 会出一些列问题
