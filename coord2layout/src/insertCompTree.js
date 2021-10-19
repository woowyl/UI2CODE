let compTree = require('./composTree');

function insertCompoTree(comp) {
    console.log(compTree.curTree.nodeid);
    (typeof compTree.curTree.nodeid == 'number') ? 
        compTree.curTree.nodeid++ : compTree.curTree.nodeid = 1;
    // console.log(comp, 'comp in function', compTree.curTree);
    /**
     * todo: 判断是否重叠
     * 
     */
}

module.exports.insertCompoTree = insertCompoTree;