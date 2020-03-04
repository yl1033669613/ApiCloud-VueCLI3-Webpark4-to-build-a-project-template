# APICloud + VueCLI3 项目demo

## 简介

使用[https://github.com/yl1033669613/apicloud_vuecli_app](https://github.com/yl1033669613/apicloud_vuecli_app)框架快速构建开发的 APP DEMO

## 如何使用

1. 创建APICloud项目（获取appId）

2. 克隆或下载项目到本地

3. 请将项目中`publish`文件夹下`config.xml`文件里的appId改为您项目的appId(重要)

4. `npm install` （安装依赖）

5. `npm run serve` （运行项目前请确保全局安装了`@vue/cli`。如果没有请 `npm install -g @vue/cli`）

    可以在浏览器中调试（模块，app接口除外）

    Local: `http://localhost:8080/your_pages.html`

    Network: `http://your_IP:8080/your_pages.html`

6. 同步手机

    首先 `npm run wifi-start` 初始wifi连接，初始成功后可以在自定义loader的wifi同步配置里输入`ip`和`端口号（默认10915）`进行连接

    `npm run wifi-sync` 命令操作 wifi同步手机

    `npm run wifi-log` 打开log输出，可以方便查看app运行时的报错和log

    开发模式下仍然编译代码到dist，所以也可以用 `APICloud Studio` 连接手机同步代码

8. 请为您的项目添加以下模块 UIPullRefreshFlash、UIActionSelector、photoBrowser、UIScrollPicture、FNImageClip、bMap

## 相关链接

[APICloud](https://www.apicloud.com/)
[vueJS](https://cn.vuejs.org/)

## demo截图

![图片1](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/1.jpg)
![图片2](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/2.jpg)
![图片3](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/3.jpg)
![图片4](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/4.jpg)
![图片5](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/5.jpg)
![图片6](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/6.jpg)
![图片7](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/7.jpg)
![图片8](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/8.jpg)
![图片9](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/example/example_pic/9.jpg)

## LICENSE

[MIT](https://github.com/yl1033669613/apicloud_vuecli_example/blob/master/LICENSE)