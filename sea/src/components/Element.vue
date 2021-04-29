<template>
    <div class="element-wrapper">
        <h2 class="title">选择元素</h2>
        <div 
            v-for="(element, index) in elementsList"
            v-bind:key="index"
            class="item-wrapper"
            >
            <p class="title">{{element.name}}</p>
            <div 
                class="element"
                draggable="true"
                v-bind:data-dsl= "JSON.stringify(element.dsl)"
                @dragstart="dragstart"
                @dragend="dragend"
                @dragenter="dragenter"
                @dragover="dragover"
                v-html="element.html">
            </div>
        </div>

    </div>
</template>

<script>
import { Elements } from '../config/dragEle/element';
export default {
    data() {
        return {
            elementsList: Elements
        }
    },
    methods: {
        dragstart(event) {
            let DSL = JSON.parse(event.target.dataset.dsl);
            DSL.nodeid = localStorage.nodeid++;
            event.dataTransfer.setData("DSL", JSON.stringify(DSL));
            
            event.effectAllowed = "copy";
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
            this.$emit('properchange')
        }
    },
    mounted() {
        typeof localStorage.nodeid == 'undefined' ? localStorage.nodeid = 1 : '';
    }
}
</script>

<style lang="less">
    .element-wrapper {
        width: 240px;
        padding: 20px;
        border-left: 1px solid #bbb;
    }
    .item-wrapper {
        margin-bottom: 26px;
        .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 6px;
        }
        .element {
            div {
                border: 1px solid #333;
                height: 100px;
                width: 100%;
                border-radius: 4px;
            }
            p, span {
                border: 1px solid rgb(216, 210, 210);
                padding: 2px;
            }
            img {
                width: 70%;
                border-radius: 4px;
            }
        }
    }
</style>