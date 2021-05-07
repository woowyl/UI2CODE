// import demoTree from '../mock/demoDSL'

// function getTextNode(type) {
//     let textNode = document.createTextNode()
// }

import deepcopy from '../utils/tools/deepCopy'

export default function(DSL) {
    let root = document.createElement('div');
    root.classList.add('root');
    /**
     * 采用深度优先的方式DFS
     */
    let dcDSL = deepcopy(DSL);
    let stack = [];
    stack.push(dcDSL);
    while (stack.length != 0) {
        let item = stack.pop();
        let title = document.createElement("p");
        title.classList.add("title");
        let childrenWrapper = document.createElement("div");
        childrenWrapper.classList.add("children");
        switch (item.type) {
            case 'document':
                title.classList.add('document');
                title.textContent = 'document';
                item.parent = root;
                break;
            case 'block':
                title.textContent = 'block';
                title.classList.add('block');
                break;
            case 'text':
                title.textContent = 'text';
                title.classList.add('text');
                break;
            case 'img':
                title.textContent = 'img';
                title.classList.add('img');
                break;
            default:
                break;
        }
        item.parent.appendChild(title);
        item.parent.appendChild(childrenWrapper);
        let children = item.children;
        for (let i = children.length; i--; i > 0) {
            children[i].parent = childrenWrapper;
            stack.push(children[i]);
        }
    }
    return root.outerHTML;
}