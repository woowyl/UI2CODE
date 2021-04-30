<template>
    <div id="app" class="wrapper">
        <!-- 头部bar -->
        <top-bar></top-bar>
        <!-- 导出弹窗 -->
        <export-model></export-model>
        <!-- 系统主要操作区 -->
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
import TopBar from './components/TopBar.vue'
import ExportModel from './components/ExportModel.vue'

export default {
    name: 'App',
    components: {
        DSL,
        Action,
        PropertyArea,
        Element,
        TopBar,
        ExportModel
    },
    data() {
        return {
        }
    },
    methods: {
        closePorp() {
        },
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
    
    .main-wrapper {
        display: flex;
        height: 100%;
    }
}
</style>
