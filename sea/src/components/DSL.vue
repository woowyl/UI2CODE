<template>
    <div class="dsl-wrapper">
        <h2 class="title">DSL Tree</h2>
        <div v-html="DSLTree">
        </div>

    </div>
</template>

<script>
// import { mapState } from 'vuex';
import getDSLTree from '../utils/getDSLTree';

import { createNamespacedHelpers } from 'vuex';
const { mapState } = createNamespacedHelpers('DSL');

export default {
    computed: {
        ...mapState({
            DSLTree: state => getDSLTree(state.DSL)
        })
    },
    updated() {
    }
}
</script>

<style lang="less">
    .dsl-wrapper {
        width: 240px;
        padding: 20px;
        border-right: 1px solid #bbb ;
        .root {
            .title {
                color: #333;
                font-size: 16px;
                margin: 0;
                padding: 10px 0;
            }
            .children {
                padding-left: 20px;
                border-left: 1px solid #bbb;
            }
        }
        
    }
</style>