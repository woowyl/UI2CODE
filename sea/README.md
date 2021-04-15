# 实现一个UI2CODE的系统

## 基础版本 - 拖拽
1. 定义好多种布局，已经其对应的DSL结构
2. 选中拖拽布局，将布局拖入操作面板，则生成对应的DSL
3. 在操作面板，选中DOM元素后，可以为其添加class， 定义 width, height,padding, margin 等，这些操作将同步到DSL
4. 根据DSL结构导出 `.html` 和 `.less`文件

##  升级版本 - 图像识别
1. 图像识别替换以上1、2步骤
2. 同以上 3、4


## DSL的结构定义
```js
    {
       type: 'document',
       children:[
           {
               type: 'element',
               tagName: 'html',
               nodeid: 0,//自增，用于找到对应
               children: [{
                    type: 'element',
                    tagName: 'div',
                    nodeid: 1,
                    children: [],
                    attributes: [],
                }, {
                    type: 'text',
                    nodeid: 2,
                    content: 'this is text'
                }
                   
               ],
                attributes: [
                   {
                       name: 'class',
                       value: 'hello world'
                   },
                   {
                       name: 'id',
                       value: '#id'
                   }
               ],
               computedStyle: {
                   width: '100px',
                   display: 'flex',
                   'align-items': 'center'
               }
           }
       ]
    }
```


## todo list
1. 拖到action区域后，元素留在鼠标位置
    - 不能单纯的append元素，需要判断位置，insert到dom之间，这个操作会影响到DSL结构的生成
2. 元素放入action区域后，生成DSL结构
3. property 面板内容
    - tagname
    - class
    - id
    - width
    - height
    - display
4. 选中元素,触发其property面板
5. 根据DSL生成HTML 和 LESS
