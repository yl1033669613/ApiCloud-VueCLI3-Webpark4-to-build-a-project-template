# apicloud_vuecli3_project

## 技术栈

apicloud、apicloud模块、vuejs 2.x、VueCLI 3.x、webPark 4、Babel、scss(css预编译)、nodejs、npm

## 使用

1. 创建APICloud项目并检出初始代码

2. 从 https://github.com/yl1033669613/apicloud_vuecli3_project 克隆或下载项目到本地

3. 请将项目中publish文件夹下config.xml文件里的appID改为您项目的appID

4. npm install （安装依赖）

5. npm run serve （运行开发模式同样会输出编译代码到dist）

6. 同步手机，首先 npm run wifi-start 初始wifi连接，npm run wifi-sync wifi同步手机， npm run wifi-log wifi同步输出log信息。开发模式下仍然编译代码到dist，所以可以用APICloud Studio 连接手机

7. npm run build 输出编译代码到dist 将编译代码上传APICloud

8. 请为您的项目添加下拉刷新模块 UIPullRefreshFlash

## css 预编译

本项目推荐使用sass/scss

## 移动端框架

未使用移动端框架，如有需求可自行npm安装使用

## ESlint 

本项目未安装ESlint如有需求请参考[VueCLI3插件](https://cli.vuejs.org/zh/guide/plugins-and-presets.html#%E6%8F%92%E4%BB%B6)

## 框架编程需求

需要开发者有一定apicloud、vue、vuecli开发经验。

## 最佳实践

[demo](https://github.com/yl1033669613/apicloud_vuecli3_project/tree/master/example)

## demo截图