<template>
    <div id="app" class="wrapper">
        <!-- 左侧DSL -->
        <DSL></DSL>
        <!-- 中间action区域 -->
        <action v-on:properchange="changePro"></action>
        <!-- 右侧布局选择 -->
        <layout-select></layout-select>
        <!-- 右侧属性修改 -->
        <property-area :show="showProperty"></property-area>
    </div>
</template>

<script>
import Action from './components/Action.vue'
import DSL from './components/DSL.vue'
import LayoutSelect from './components/LayoutSelect.vue'
import PropertyArea from './components/PropertyArea.vue'

export default {
  name: 'App',
  components: {
    DSL,
    LayoutSelect,
    Action,
    PropertyArea
  },
  data() {
      return {
          showProperty: false
      }
  },
  methods: {
      changePro() {
          this.showProperty = !this.showProperty;
      }
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
    margin: 20px;
    overflow: hidden;
    display: flex;
    position: relative;
}
</style>
