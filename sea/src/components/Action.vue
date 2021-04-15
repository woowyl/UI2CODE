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
            console.log(33);
            event.preventDefault();
        },
        dragover(event) {
            console.log(22);
            event.preventDefault();
        },
        drop(event) {
            var id = event.dataTransfer.getData("text");
            var nodeCopy = document.getElementById(id).cloneNode(true);
            nodeCopy.id = "newId";
            event.target.appendChild(nodeCopy);
        }
    }
}
</script>

<style lang="less" scoped>
.action-wrapper {
    flex: 1;
    margin: 10px;
}
</style>