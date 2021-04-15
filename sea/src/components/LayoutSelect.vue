<template>
    <div class="layout-wrapper box-border">
        <div class="box-wrapper">
            <div class="box box-3"
                id="box_1" 
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
export default {
    data: function() {
        return {

        }
    },
    methods: {
        dragstart(event) {
            event.dsl = {
                'parent': 'div',
                'child': ['div', 'p']
            }
            event.dataTransfer.setData("text", event.target.id);
            // Tell the browser both copy and move are possible
            event.effectAllowed = "copyMove";
            console.log('dragstart', event);
        },
        dragend(event) {
            console.log(event);
        },
        dragenter(event) {
            console.log(33);
            event.preventDefault();
        },
        dragover(event) {
            console.log(22);
            event.preventDefault();
        },
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
    .box {
        border: 1px solid red ;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 240px;
        padding: 2px;
        margin: 5px;
        &:hover {
            box-shadow:0px 0px 10px 5px #aaaaaa;
        }
    }
    .item{
        border: 1px solid blue;
        height: 50px;
        margin: 5px;
    }
    .fill {
        flex: 1;
    }
</style>