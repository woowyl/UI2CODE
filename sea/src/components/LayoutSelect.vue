<template>
    <div class="layout-wrapper box-border">
        <div class="wrapper">
            <div class="box box-3" 
                draggable="true" 
                @dragstart="dragstart"
                @dragend="dragend">
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
            console.log('dragstart', event);
        },
        dragend(event) {
            console.log(event);
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

    .wrapper {
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
        width: 220px;
        height: 300px;
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