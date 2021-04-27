// import demoDSL from '../mock/demoDSL'

function addEditFun(curEle) {
    curEle.addEventListener("dblclick", (e) => {
        e.stopPropagation();
        console.log(curEle);
            // 首先让选中的元素加上样式，同一时刻只能编辑一个元素
        document.querySelectorAll('*').forEach(ele => {
            ele.classList.remove('cur-edit');
        })
        let curClassList = e.target.classList;
        let curNodeId = e.target.getAttribute('data-nodeid');

        curClassList.toggle('cur-edit');
        window.vueApp.$store.commit("open_property_pannel");
        window.vueApp.$store.commit({
            type: 'set_current_node',
            nodeid: curNodeId
        })
    }, false)
}

export default function(DSL) {
    let stack = [];
    // let copyedDSL = JSON.parse(JSON.stringify(DSL));
    // console.log("copyedDSL", copyedDSL, DSL);
    // stack.push(copyedDSL);
    stack.push(DSL);
    let root;
    while(stack.length !== 0) {
        let item = stack.pop();
        let ele = document.createElement(item.type == 'document' ? 'div' : item.tagName);
        
        ele.setAttribute("data-nodeid", item.nodeid || 'root');
        switch (item.type) {
            case 'document':
                root = ele;
                break;
            case 'block':
                item.computedStyle.border = '1px solid #000';
                item.computedStyle.padding = '5px';
                item.computedStyle.margin = '8px';
                item.computedStyle['min-height'] = '100px';
                item.computedStyle['min-width'] = '200px';
                break;
            case 'text':
                ele.textContent = item.content;
                item.computedStyle["user-select"] = 'none';
                item.computedStyle.border = '1px solid #ccc';
                break;
            case 'img':
                item.computedStyle["user-select"] = 'none';
                ele.setAttribute('src', item.attributes.src);
                ele.setAttribute('draggable', false);
                break;
            default:
                break;
        }

        if (item.computedStyle) {
            let styleList = [];
            for (let style in item.computedStyle) {
                styleList.push(`${style}:${item.computedStyle[style]}`);
            }
            ele.setAttribute('style', styleList.join(";"))
        }

        if (item.attributes) {
            for (let attr in item.attributes) {
                ele.setAttribute(attr, item.attributes[attr])
            }
        }
        
        if (typeof item.parent != 'undefined') {
            item.parent.appendChild(ele);
        }
        let children = item.children;
        for (let i = children.length; i --; i > 0) {
            children[i].parent = ele;
            children[i].__index = i;
            children[i].__parentNode = children;
            stack.push(children[i]);
        }
        addEditFun(ele);
    }
    return root;
}