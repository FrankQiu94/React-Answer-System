针对项目需求完成
 1.分科目渲染随机题目
 2.答题后自动跳转下一题
 3.提交后校对是否完整答题，并显示相应提示框，如若未答题完整，取消提交可自动跳转到未答题目
 4.提交后比较正确答案，并显示相应成绩，渲染对应的表情包
 5.用户其他行为的选择面板

该小项目已上线，移动端[访问链接](http://www.cyikao.com/zg/2018_ysdtxt)

## 目录格式
---
.
+-- config
|   +-- jest
    |   +-- cssTransform.js
    |   +-- fileTransform.js
|   +-- env.js
|   +-- path.js
|   +-- polyfills.js
|   +-- webkpack.config.dev.js
|   +-- webkpack.config.prod.js
|   +-- webkpackDevServer.config.js
+-- src
|   +-- img
|   +-- js
    |   +-- componentes
    |   +-- data
    |   +-- redux
|   +-- less
    |   +-- mixin.less
    |   +-- reset.less
    |   +-- style.less
|   +-- index.css
|   +-- index.js
|   +-- reducer.js
|   +-- utils.js
+-- public
|   +-- manifest.json
|   +-- index.html
|   +-- favicon.icon
+-- script
|   +-- build.js
|   +-- start.js
|   +-- test.js
+-- package.json
