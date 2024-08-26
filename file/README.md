<!--
 * @Author: your name
 * @Date: 2021-12-29 15:14:41
 * @LastEditTime: 2022-03-14 14:28:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \file\README.md
-->
## 目录说明
1. node_modules 将node_modules.rar解压生成，项目依赖模块
2. src 使用express搭建的静态及逻辑处理服务，以及上传下载页
3. static 服务端存放文件以供下载的目录
4. uploads 客户端上传文件到该目录

## 注意
1. 使用前，修改src/filelist.html 39行为本机IP，否则无法下载

## 用法
1. 运行npm run serve启动服务
2. 访问 [/upload](http://192.168.52.151:7770/upload) 进入上传页，可传输文本及文件
3. 访问 [/download](http://ip:port/download) 进入下载页，可预览服务端文件，点击文件名下载文件 
