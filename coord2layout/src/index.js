let compos = require('./getComps');
const insertFoo = require('./insertCompTree');
let compTree = require('./composTree');
/**
 *  step1: 初始化组件树
 */

 /**
 *  step2: 读取原料库feedstock文件夹下的json数据
 */
//console.log(compos);
 /**
 *  step3: 遍历读取json中的数组数据
 */

 while(compos.length > 0) {
    let compo = compos.shift();
    insertFoo.insertCompoTree(compo);
 }
 console.log(`遍历完毕`);

 /**
 *  step4: 将读取数据放入组件树合适位置
 */

console.log(compTree);
 
/**
 *  step5: 读取结束，输出组件树
 */