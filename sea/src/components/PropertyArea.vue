<template>
        <div 
        class="property-wrapper box-border" 
        :class="{'show': showPop}">属性选择区
            <button @click="closeProp">关闭</button>
        </div>
</template>

<script>
export default {
    data() {
        return {
            showPop: this.show
        }
    },
    methods: {
        closeProp() {
            this.showPop = false;
        }
    },
    mounted() {
        let vueBus = window.vueBus;
        
        vueBus.$on('properchange',(val) => {
            this.showPop = val;
        });
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