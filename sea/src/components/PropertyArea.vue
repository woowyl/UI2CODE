<template>
    <div class="property-wrapper box-border" :class="{'show': show}">属性选择区</div>
</template>

<script>
export default {
    props: ['show'],
    mounted() {
      console.log(this.show);
    }
}
</script>

<style lang="less" scoped>
 .property-wrapper {
        width: 240px;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        background: skyblue;
        transform: translateX(100%);
        transition: all ease-in-out .2s;
        &.show {
            transform: translateX(0);
        }
  }
</style>