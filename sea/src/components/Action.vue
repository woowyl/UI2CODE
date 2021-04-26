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
import '../utils/contextMenu';
import getSiblingCoords from '../utils/getSiblingCoords';
import getIndexbyCoords from '../utils/getIndexByCoords';
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
                // 为了保留dom中的事件，这里需要将dom append到页面中，而不能直接用v-html
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
            /**
             * todo: 根据event.target,获取到其父元素，
             *       然后分别获取父元素的子元素的 x y  
             *       和event事件的x y做比较，得出，具体的index 位置
             *  */ 
            
            let siblingCoords = getSiblingCoords(event.target);
            let eventCoord = {
                x: event.x,
                y: event.y
            };
            let insertIndex = getIndexbyCoords(siblingCoords, eventCoord);
            console.log("insertIndex====", insertIndex);
            let nodeid = event.target.getAttribute("data-nodeid");
            if (nodeid) {
                this.$store.commit({
                    type: 'add_dsl_item',
                    dsl: DSL,
                    position: nodeid,
                    index: insertIndex
                });
            } else {
                this.$store.commit({
                    type: 'add_dsl_item',
                    dsl: DSL,
                    position: 0,
                    index: insertIndex
                });
            }
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