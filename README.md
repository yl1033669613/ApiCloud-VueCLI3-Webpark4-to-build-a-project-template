# apicloud_vuecli3_project

## 目录

```
├─dist
├─node_modules
├─public
│  ├─image
│  │  └─tabbar // 底部tabbar 图标
│  └─res
│      └─refresh // 下拉刷新贞动画图片
└─src
    ├─assets
    ├─components // 组件
    ├─libs // js库
    ├─pages // 页面文件夹所在位置
    │  ├─home // 包含一个页面入口文件index.js 和一个index.vue
    │  ├─index
    │  ├─login
    │  ├─normal_header_win
    │  ├─page_header
    │  ├─profile
    │  ├─special_header
    │  ├─special_header_win
    │  └─tmp_pop
    └─scss
```

## 简介

APICloud+VueCLI3 完美结合的开发框架，快速构建apicloud APP。

使用rem适配移动端各种设备

每个页面单独编译

common.js 封装了许多针对apicloud app 的方法，包括ajax、图片缓存、窗口打开、模块使用等(具体使用请参考example)

## 技术栈

apicloud、apicloud模块、vuejs 2.x、VueCLI 3.x、webPark 4、Babel、scss(css预编译)、nodejs、npm

## 如何使用

1. 创建APICloud项目

2. 从 https://github.com/yl1033669613/apicloud_vuecli3_project 克隆或下载项目到本地

3. 请将项目中publish文件夹下config.xml文件里的appID改为您项目的appID(重要)

4. npm install （安装依赖）

5. npm run serve （运行开发模式同样会输出编译代码到dist）

6. 同步手机，
    首先 npm run wifi-start 初始wifi连接
    npm run wifi-sync wifi同步手机
    npm run wifi-log wifi同步输出log信息。
    开发模式下仍然编译代码到dist，所以也可以用APICloud Studio 连接手机同步

7. npm run build 输出编译代码到dist 将编译代码上传APICloud，即可打包编译APICloud APP

8. 请为您的项目添加以下模块 UIPullRefreshFlash(必须)、UIActionSelector(非必须)、photoBrowser(非必须)

## css 预编译

本项目推荐使用sass/scss

## 资源引用

开发环境下资源引用方式

当你在 JavaScript、CSS 或 *.vue 文件中使用相对路径 (必须以 . 开头) 引用一个静态资源时，该资源将会被包含进入 webpack 的依赖图中。在其编译过程中，所有诸如 &lt;img src="...">、css内的background: url(...) 和 CSS @import 的资源 URL 都会被解析为一个模块依赖。

因此此类资源请放在assets文件夹内，在publish下的文件只是简单的复制，请使用编译后的文件关系引用(即实际app内文件引用方式)

## 移动端框架

未使用移动端框架，如有需求可自行npm安装使用

## ESlint

本项目未安装ESlint如有需求请参考[VueCLI3插件](https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E6%8F%92%E4%BB%B6)

## 框架编程需求

需要开发者有一定apicloud、vue、vuecli开发经验。

## 最佳实践

[demo](https://github.com/yl1033669613/apicloud_vuecli3_project/tree/master/example)

## demo截图

![图片1](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/1.jpg)
![图片2](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/2.jpg)
![图片3](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/3.jpg)
![图片4](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/4.jpg)
![图片5](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/5.jpg)
![图片6](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/6.jpg)
![图片7](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/7.jpg)
![图片8](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/8.jpg)
![图片9](https://github.com/yl1033669613/apicloud_vuecli3_project/blob/master/example/example_pic/9.jpg)