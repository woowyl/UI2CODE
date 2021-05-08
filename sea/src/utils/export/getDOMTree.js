
function format(node, level) {
    
    var indentBefore = new Array(level++ + 1).join('    '),
        indentAfter  = new Array(level - 1).join('    '),
        textNode;
    
    for (var i = 0; i < node.children.length; i++) {
        
        textNode = document.createTextNode('\n' + indentBefore);
        node.insertBefore(textNode, node.children[i]);
        
        format(node.children[i], level);
        
        if (node.lastElementChild == node.children[i]) {
            textNode = document.createTextNode('\n' + indentAfter);
            node.appendChild(textNode);
        }
    }
    
    return node;
}

export default function(DSL) {
    let root = document.createElement('div');
    root.classList.add('root');
    console.log('utils/export/getDOMtree', DSL);
    /**
     * 采用深度优先的方式DFS
     */
    let stack = [];
    let lessTree = {};
    let curObj;
    stack.push(DSL);
    while (stack.length != 0) {
        let item = stack.pop();
        let childrenWrapper = document.createElement("div");
        switch (item.type) {
            case 'document':
                item.parent = root;
                childrenWrapper = document.createElement("div");
                childrenWrapper.id = "document";
                curObj = lessTree;
                break;
            case 'block':
                childrenWrapper = document.createElement("div");
                break;
            case 'text':
                childrenWrapper = document.createElement("p");
                break;
            case 'img':
                childrenWrapper = document.createElement("img");
                break;
            default:
                break;
        }
        item.parent.appendChild(childrenWrapper);
        let children = item.children;
        for (let i = children.length; i--; i > 0) {
            children[i].parent = childrenWrapper;
            stack.push(children[i]);
        }
        // 将属性赋值到dom中
        for (let attr in item.attributes) {
            childrenWrapper.setAttribute(attr, item.attributes[attr])
        }
        /**
         * 处理样式格式
         * {
         *      .a {
         *          font-size: 19px;
         *          display: flex;
         *          flex-direction: column;
         *          .b {
         *              color: #ccc;
         *          }
         *      }
         *      .cls {
         *          display:flex;
         *      }
         * }
         */

        if (item.type != 'document') {
            // 有class的话优先class
            let key = item.attributes.class ? '_' + item.attributes.class : item.tagName;
            curObj[key] = item.computedStyle;
            (children.length > 0) && (curObj = curObj[key]);
        } 

    }
    
    let div = document.createElement('div');
    div.innerHTML = root.querySelector("#document").children[0].outerHTML;

    // 对样式做处理
    return {
        view: format(div, 0).innerHTML,
        style: JSON.stringify(lessTree, null, 4).replaceAll('"', '').replaceAll(',', ';').replaceAll('_', '.').replaceAll(': {', ' {').replaceAll('};', '}')
    } 
}