import demoTree from '../mock/demoDSL'

// function getTextNode(type) {
//     let textNode = document.createTextNode()
// }

export default function() {
    console.log("demo before",demoTree);
    let root = document.createElement('div');
    /**
     * 采用深度优先的方式DFS
     */
    let nodes = [];
    let stack = [];
    stack.push(demoTree);
    debugger
    while (stack.length != 0) {
        let item = stack.pop();

        let title = document.createElement("p");
        let childrenNode = document.createElement("div");
        childrenNode.classList.add("children");
        switch (item.type) {
            case 'document':
                title.textContent = 'document';
                item.parent = root;
                break;
            case 'block':
                title.textContent = 'block';
                break;
            case 'text':
                title.textContent = 'text';
                break;
            case 'img':
                title.textContent = 'img';
                break;
            default:
                break;
        }
        item.parent.appendChild(title);
        item.parent.appendChild(childrenNode);
        nodes.push(item);
        let children = item.children;
        for (let i = children.length; i--; i > 0) {
            children[i].parent = childrenNode;
            stack.push(children[i]);
        }
    }
    console.log("demo flat:====", nodes);
    console.log("root:====", root);
    root.textContent = 'document';
    return root.outerHTML;
}