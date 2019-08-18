# gulu---一个Vue UI 组件
[![npm version](https://badge.fury.io/js/w-vue-gulu.svg)](https://badge.fury.io/js/w-vue-gulu)

## 介绍
学习Vue 过程中自制的UI框架，希望能对你有所作用
## 开始使用
1. 添加 CSS 样式
  
      使用本框架前， 请在CSS中开启 border-box
    ```$xslt
     *{box-sizing: border-box;}
    ```
   IE 8 及以上浏览器支持；
   
   你还需要设置默认颜色变量（后续会改为使用SCSS变量）
   
   ```
     html {
            --button-height: 32px;
            --font-size: 14px;
            --button-bg: white;
            --button-active-bg: #eee;
            --border-radius: 4px;
            --color: #333;
            --border-color: #999;
            --border-color-hover: #666;
       }
   ```
   IE15 及以上浏览器支持；
   
   2 . 安装gulu
   ```
    npm i --save w-vue-gulu
   ```
   
   3 . 引入 gulu
   
   ```
   import {Button,ButtonGroup,Icon} from 'w-vue-gulu'
   import 'w-vue-gulu/dist/index.css'
   
   export default {
       name:'app',
       components:{
           'g-button':Button,
           'g-icon':Icon
       }
   }
   ```
    
## 文档
## 提问
## 变更记录
## 联系方式
## 贡献代码
  
