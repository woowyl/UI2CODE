let compTree = {
    type: 'document',
    children:[
        {
            type: 'element',
            tagName: 'html',
            nodeid: 0,//自增，用于找到对应
            children: [
            ],
            attributes: [
            ],
            computedStyle: {
            }
        }
    ]
}

module.exports = {
    curTree: compTree.children,
    curNum: 1
}