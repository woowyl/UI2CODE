
export default function (dsl, nodeid) {
    let result = null;
    let stack = [];
    stack.push(dsl);

    while (stack.length != 0) {
        let item = stack.shift();
        if (item.nodeid && item.nodeid == nodeid) {
            result = item;
            break;
        }
        let children = item.children;
        for (let i = 0; i < children.length; i++ ) {
            let child = children[i];
            stack.push(child);
        }
    }

    return result;
}