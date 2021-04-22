<template>
    <div 
        class="action-wrapper box-border" 
        @dragenter="dragenter"
        @dragover="dragover"
        @drop="drop">

        <button @click="showPropertyPannel">查看属性</button>
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
            this.$emit('properchange')
        },
        dragenter(event) {
            event.preventDefault();
        },
        dragover(event) {
            event.preventDefault();
        },
        drop(event) {
            let vueBus = window.vueBus;
            var id = event.dataTransfer.getData("id");
            // let DSL = event.dataTransfer.getData("DSL");
            var nodeCopy = document.getElementById(id).cloneNode(true);
            nodeCopy.id = "123";
            nodeCopy.draggable = false;
            nodeCopy.addEventListener("dblclick", (e) => {
                // 首先让选中的元素加上样式，同一时刻只能编辑一个元素
                document.querySelectorAll('*').forEach(ele => {
                    ele.classList.remove('cur-edit');
                })
                let curClassList = e.target.classList;
                curClassList.toggle('cur-edit');
                vueBus.$emit('properchange', true)
            })
            nodeCopy.setAttribute('nodeid', window.nodeID ++);
            nodeCopy.childNodes.forEach((item) => {
                item.setAttribute('nodeid', window.nodeID ++);
            });
            // todo  这里不应该之间append
            event.target.appendChild(nodeCopy);
        }
    }
}
</script>

<style lang="less" scoped>
.action-wrapper {
    flex: 1;
    margin: 10px;
    padding: 10px 50px;
    .layout-box { 
        max-width: 200px;
        max-height: 240px;
    }
}
</style>