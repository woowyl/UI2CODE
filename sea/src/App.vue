<template>
    <div id="app" class="wrapper">
        <div class="fixed-top-bar">

        </div>
        <div class="main-wrapper">
            <!-- 左侧DSL -->
            <DSL></DSL>
            <!-- 中间action区域 -->
            <action></action>
            <!-- 右侧布局选择 -->
            <!-- <layout-select></layout-select> -->
            <!-- 右侧属性修改 -->
            <property-area></property-area>
            <!-- 选择元素 -->
            <Element></Element>
        </div>
    </div>
</template>

<script>
import Action from './components/Action.vue'
import DSL from './components/DSL.vue'
import PropertyArea from './components/PropertyArea.vue'
import Element from './components/Element.vue'

export default {
    name: 'App',
    components: {
        DSL,
        // LayoutSelect,
        Action,
        PropertyArea,
        Element
    },
    data() {
        return {
        }
    },
    methods: {
        closePorp() {
            let vueBus = window.vueBus;
            vueBus.$emit('properchange', false)
        }
    },
    mounted() {
        
    }
}
</script>

<style lang="less">
.wrapper {
    * {
        box-sizing: border-box;
    }
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    .fixed-top-bar {
        display: flex;
        width: 100%;
        height: 80px;
        background: #ccc;
    }
    .main-wrapper {
        display: flex;
        padding: 20px;
        height: 100%;
    }
}
</style>
