<template>
    <div class="action-wrapper box-border">

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