
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
    stack.push(DSL);
    while (stack.length != 0) {
        let item = stack.pop();
        let childrenWrapper = document.createElement("div");
        switch (item.type) {
            case 'document':
                item.parent = root;
                childrenWrapper = document.createElement("div");
                childrenWrapper.id = "document";
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
    }
    console.log(root.querySelector("#document"), root.querySelector("#document").children[0]);
    let div = document.createElement('div');
    div.innerHTML = root.querySelector("#document").children[0].outerHTML;
    return format(div, 0).innerHTML;
}