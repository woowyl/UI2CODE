<template>
        <div 
        class="property-wrapper box-border" 
        :class="{'show': showPop}">
            <h2 class="title">属性修改</h2>
            
            <a-icon 
                type="close" 
                :style="{ fontSize: '18px', color: '#333' }"
                @click="closeProp"/>

            <div class="item-wrapper">
                <p class="title">标签名</p>
                <a-input class="input" placeholder="标签名" />
            </div>
            <div class="item-wrapper">
                <p class="title">class名(多个用空格隔开)</p>
                <a-input class="input" placeholder="class" />
            </div>
            <div class="item-wrapper">
                <p class="title">宽度</p>
                <a-input class="input" placeholder="宽度" suffix="px"/>
            </div>
            <div class="item-wrapper">
                <p class="title">高度</p>
                <a-input class="input" placeholder="高度" suffix="px"/>
            </div>
        </div>
</template>

<script>
import '../common.css';
import { mapState } from 'vuex'
export default {
    data() {
        return {}
    },
    computed: {
        ...mapState({
            showPop: state => state.showPropertyPanel
        })
    },
    methods: {
        closeProp() {
            this.$store.commit('close_property_pannel');
        }
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
.property-wrapper {
    width: 262px;
    height: 100vh;
    position: absolute;
    right: 0;
    top: 0;
    background: #fff;
    transform: translateX(100%);
    transition: all ease-in-out .2s;
    padding: 20px;
    &.show {
        transform: translateX(0);
    }
    .anticon-close {
        font-size: 24px;
        position: absolute;
        top: 28px;
        right: 28px;
    }
    .item-wrapper {
        margin-bottom: 26px;
        .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 6px;
        }
    }
}
</style>