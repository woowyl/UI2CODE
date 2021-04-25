<template>
    <div 
        class="action-wrapper box-border" 
        @dragenter="dragenter"
        @dragover="dragover"
        @drop="drop">
        <a-button 
            type="primary" 
            @click="showPropertyPannel">查看属性
        </a-button>
    </div>
</template>

<script>

export default {
    name: 'Action',
    components: {

    },
    data() {
        return {

        }
    },
    methods: {
        showPropertyPannel() {
            let vueBus = window.vueBus;
            vueBus.$emit('properchange', true)
        },
        dragenter(event) {
            event.preventDefault();
        },
        dragover(event) {
            event.preventDefault();
        },
        drop(event) {
            let DSL = JSON.parse(event.dataTransfer.getData("DSL"));
            // 没有nodeid的节点，证明是在顶层，否则放入对应nodeid的子元素中
            let nodeid = event.target.getAttribute("nodeid");
            if (nodeid) {
                this.$store.commit({
                    type: 'add_dsl_item',
                    dsl: DSL,
                    position: nodeid
                });
            } else {
                this.$store.commit({
                    type: 'add_dsl_item',
                    dsl: DSL,
                    position: 0
                });
            }
            // let vueBus = window.vueBus;
            // var id = event.dataTransfer.getData("id");
            // // let DSL = event.dataTransfer.getData("DSL");
            // var nodeCopy = document.getElementById(id).cloneNode(true);
            // nodeCopy.id = "123";
            // nodeCopy.draggable = false;
            // nodeCopy.addEventListener("dblclick", (e) => {
            //     // 首先让选中的元素加上样式，同一时刻只能编辑一个元素
            //     document.querySelectorAll('*').forEach(ele => {
            //         ele.classList.remove('cur-edit');
            //     })
            //     let curClassList = e.target.classList;
            //     curClassList.toggle('cur-edit');
            //     vueBus.$emit('properchange', true)
            // })
            // nodeCopy.setAttribute('nodeid', window.nodeID ++);
            // nodeCopy.childNodes.forEach((item) => {
            //     item.setAttribute('nodeid', window.nodeID ++);
            // });
            // // todo  这里不应该之间append
            // event.target.appendChild(nodeCopy);

            
        }
    }
}
</script>

<style lang="less" scoped>
.action-wrapper {
    flex: 1;
    margin: 10px;
    padding: 10px 50px;
    
}

</style>