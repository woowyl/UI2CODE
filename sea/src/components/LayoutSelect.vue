<template>
    <div class="layout-wrapper box-border">
        <div class="box-wrapper">
            <div class="layout-box box-3"
                id="layout-1" 
                draggable="true" 
                @dragstart="dragstart"
                @dragend="dragend"
                @dragenter="dragenter"
                @dragover="dragover">
                <div class="item"></div>
                <div class="item fill"></div>
            </div>
        </div>
    </div>
</template>

<script>
import createDSL from '../utils/createDSL';

export default {
    data: function() {
        return {

        }
    },
    methods: {
        dragstart(event) {
            let DSL = JSON.stringify(createDSL());

            event.dataTransfer.setData("DSL", DSL);
            event.dataTransfer.setData("id", event.target.id);
            
            event.effectAllowed = "copyMove";
        },
        dragend(event) {
            event.preventDefault();
        },
        dragenter(event) {
            event.preventDefault();
        },
        dragover(event) {
            event.preventDefault();
        },

        // 双击选中编辑元素
        edit() {
            console.log('edit');
            this.$emit('properchange')
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="less" scoped>
    .layout-wrapper {
        width: 240px;
    }

    .box-wrapper {
        display: flex;
        border: 1px solid green;
        padding: 10px;
        margin: 10px;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .layout-box {
        border: 1px solid red ;
        display: flex;
        flex-direction: column;
        min-width: 100px;
        min-height: 100px;
        padding: 2px;
        margin: 5px;
        &:hover {
            box-shadow:0px 0px 10px 5px #aaaaaa;
        }
    }
    .layout-wrapper {
        .layout-box { 
            max-width: 200px;
            max-height: 240px;
        }
    }
    .item{
        border: 1px solid blue;
        min-height: 20px;
        margin: 5px;
    }
    .fill {
        flex: 1;
    }
</style>