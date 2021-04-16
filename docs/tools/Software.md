# :green_heart: 安装包

## webstorm

- 获取激活码地址(lookdiv-有效期一个月)[:arrow_right: 点我](http://www.lookdiv.com/)
- 永久破解教程[:arrow_right: 点我](https://shimo.im/docs/kRwwrVQPt9rKXvPg/read)

更换主题[:arrow_right: 点我](http://www.themesmap.com/)

## sublime text3

- 支持vue语法高亮

1.进入sublime，选择菜单项“Preferences->Browse Packages...”。创建Vue文件放入。
`见文档docs\.vuepress\public\file\tools\Vue.zip`

2.按下快捷键“ctrl+shift+p”，在打开的packages输入框中输入vue，选择“Set Syntax:Vue Component”进行加载。

3.重启sublime，即能看到语法高亮。

## node

- 下载旧版msi安装包[:arrow_right: 地址](https://nodejs.org/dist/v12.16.2/node-v12.16.2-x64.msi)

```vue
npm login  //npm adduser
npm publish--access=public
```

## git

```
Git:
1、github:新建仓库  
主：
（1）git init
（2）git add .
（3）git commit -m "first commit"
（4）git remote add origin https://github.com/wangrong97111/ceshi.git
（5）git push -u origin master
建立主分支：
（1）Git branch dev 建立分支dev
（2）Git push origin dev 上传分支

（3）git fetch 查看新内容
（4）Git merge origin dev 下载到组长本地
（5）Git push origin master 上传到gitHub

子:
(1) Git clone https://github.com/wangrong97111/ceshi.git
(2) Git branch 查看本地分支（*master）
(3) Git branch  dev 建立本地分支dev
(4) Git checkout -b dev 建立本地分支dev、切换分支
(5) Git add . //上传到dev
(6) Git commit -m "remark"
(7) Git push origin dev
(8)
(9) Git pull
```

<img :src="$withBase('/file/tools/git.png')" alt="foo">

- Q:Git SSH Key 生成步骤
- A:[answer](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ef4d794f-38ef-4dfe-b058-6018cbc24d9e/Git_SSH_Key_.html?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210415T074037Z&X-Amz-Expires=86400&X-Amz-Signature=42b5eca58f01bfc9f98dcf86aca342dc41e33d11a1f5ad4ab53345c3b0ac03c2&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Git%2520SSH%2520Key%2520%25E7%2594%259F%25E6%2588%2590%25E6%25AD%25A5%25E9%25AA%25A4.html%22)

## wampserver64

Q&A

- Q:win10丢失 MSVCR110.dll，无法启动程序
- A:[answer](https://answers.microsoft.com/zh-hans/windows/forum/windows_10-files-winpc/win10%E4%B8%A2%E5%A4%B1/0adddcd1-5679-4ceb-accf-4acd42ae3ae6)

- Q: Visual C++ Redistributable for Visual Studio 2012 Update 4下载地址
- A:`见文档docs\.vuepress\public\file\tools\vcredist_x64.exe`