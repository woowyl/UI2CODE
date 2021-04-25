<template>
    <div class="layout-wrapper box-border">
        <div class="box-wrapper">
            <div class="layout-box box-ver-fill"
                id="layout-1" 
                draggable="true" 
                @dragstart="dragstart"
                @dragend="dragend"
                @dragenter="dragenter"
                @dragover="dragover">
                <div class="item fill"></div>
                <div class="item fill"></div>
            </div>
            
        </div>
        <div class="box-wrapper">
            <div class="layout-box box-hor-fill"
                id="layout-2" 
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

    
    .wrap {
        flex-wrap: wrap;
    }
    .layout-box {
        border: 1px solid red ;
        display: flex;
        min-width: 100px;
        min-height: 100px;
        padding: 2px;
        margin: 5px;
    }
    .action-wrapper.box-border .layout-box { 
        max-width: 300px;
    }
    .layout-wrapper {
        .layout-box { 
            max-width: 200px;
            max-height: 240px;
            &:hover {
                box-shadow:0px 0px 10px 5px #aaaaaa;
            }
        }
    }
    // 这里是具体的box布局
    .box-ver-fill {
        flex-direction: column;
    }
    .box-hor-fill {
        flex-direction:row;
    }
    .item{
        border: 1px solid blue;
        min-height: 20px;
        min-width: 20px;
        margin: 5px;
    }
    .fill {
        flex: 1;
    }
</style>