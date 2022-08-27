let compTree = require('./composTree');

function insertCompoTree(comp) {
    debugger;
    (typeof compTree.curTree.nodeid == 'number') ? 
        compTree.curTree.nodeid++ : compTree.curTree.nodeid = 1;
    // console.log(comp, 'comp in function', compTree.curTree);
    /**
     * todo: 判断是否重叠
     * 
     */
}

module.exports.insertCompoTree = insertCompoTree;