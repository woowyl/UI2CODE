<template>
    <div class="dsl-wrapper box-border">DSL 树状结构区
        <div v-html="DSLTree">
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';
import getDSLTree from '../utils/getDSLTree'
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

<style lang="less" scoped>
    .dsl-wrapper {
        width: 240px;
    }
</style>