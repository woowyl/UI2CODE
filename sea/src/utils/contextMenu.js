/**
 * 监听事件
 * 
 * 
 */

let targetEle;

const menus = [{
     name: '编辑',
     cb: function() {
         console.log(1);
         console.log(targetEle, "编辑");
     }
 },{
    name: '删除',
    cb: function() {
        console.log(targetEle, "删除");
        targetEle.remove();
    }
},{
    name: '选中',
    cb: function() {
        console.log(targetEle, "选中");
        console.log(3);
    }
}]
const ContextMenu = function (menus) {
    let instance;
    
    function createMenu() {
       const ul = document.createElement("ul");
       ul.classList.add("context-menu");
       if (Array.isArray(menus) && menus.length > 0) {
           for (let menu of menus) {
               const li = document.createElement("li");
               li.textContent = menu.name,
               li.addEventListener("click", menu.cb);
               ul.appendChild(li);
           }
       }

       const body = document.querySelector('body');
       body.appendChild(ul);
       return ul
    }

    return {
        getInstance: function() {
            if (!instance) {
                instance = createMenu()
            }
            return instance;
        }
    }
} 


const menusSingle = ContextMenu(menus);

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    targetEle = e.target;
    showMenu(e);
})
 
 document.addEventListener("click", hideMenu);


 function hideMenu() {
    const menus = menusSingle.getInstance();
    menus.style.display = "none";
}
  
  
function showMenu(e) {
    const menus = menusSingle.getInstance(e);
    menus.style.top = `${e.clientY}px`;
    menus.style.left = `${e.clientX}px`;
    menus.style.display = 'block';
}


 