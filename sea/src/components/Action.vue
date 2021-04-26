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
        <div v-text="viewModel"></div>
        <div class="view-wrapper" id="appendView" >

        </div>
    </div>
</template>

<script>
import getViewDom from '../utils/getViewDOMTree';
import { mapState } from 'vuex';

export default {
    name: 'Action',
    components: {

    },
    data() {
        return {}
    },
    computed: {
        ...mapState({
            viewModel(state) {
                let dom = getViewDom(state.DSL);
                this.$nextTick(() => {
                    let appenview = document.querySelector("#appendView")
                    while (appenview.hasChildNodes()) {
                        appenview.removeChild(appenview.lastChild);
                    }
                    appenview.appendChild(dom);
                })
            } 
        })
    },
    methods: {
        showPropertyPannel() {
            this.$store.commit('open_property_pannel');
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
            let nodeid = event.target.getAttribute("data-nodeid");
            console.log("drop in nodeid===",nodeid);
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