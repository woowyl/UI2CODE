export default function(DSL) {
    let root = document.createElement('div');
    root.classList.add('root');
    /**
     * 采用深度优先的方式DFS
     */
    let stack = [];
    stack.push(DSL);
    while (stack.length != 0) {
        let item = stack.pop();
        childrenWrapper.classList.add("children");
        let childrenWrapper = document.createElement("div");
        switch (item.type) {
            case 'document':
                item.parent = root;
                childrenWrapper = document.createElement("div");
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
    console.log(root.outerHTML);
    return root.outerHTML;
}