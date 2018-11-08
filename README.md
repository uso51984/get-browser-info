# HTML Element Print

[demo](https://uso.gitee.io/html-element-print/)

## 安装

`npm install html-element-print`

## 引入方式

CommonJS 或者 es6引入方式
```js
  import htmlElementPrint from 'html-element-print';
```

原始引入方式
```html
    <script type="text/javascript" src="print-html-element.js"></script>
```
> element 支持 text html或者 dom对象.

## examples
```js
  const element = document.querySelector('#printElement');
  htmlElementPrint(element, {sourceType: 'dom'});
```

## 使用
```js
    htmlElementPrint(element, options);
```
## api
### 参数说明
* 1. element: 原生dom对象或html字符串
* 2. options: 配置说明， 类似为object

| 成员 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| htmlType | 设置element类型(`domObj`、`text`) | string | domObj |
| printMode | 打印的方式 | string(`popup`) | string | default |
| pageTitle | 打印标题 | string | - |
| templateString | 打印的模板 | 见：example |  |
| popupProperties | 设置新开窗口window.open参数 | string | ''|
| stylesheets | 设置打印的外部样式表 |  | '' |
| styles | 设置打印的内部样式表 |  | '' |
