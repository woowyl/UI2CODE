<template>
        <div 
        class="property-wrapper box-border" 
        :class="{'show': showPop}">
            <h2 class="title">属性修改</h2>
            <a-icon 
                    type="close" 
                    :style="{ fontSize: '18px', color: '#333' }"
                    @click="closeProp"/>
            <div class="pannel-choice">
                <div class="choice" :class="{'cur': selectPro == 1}" @click="setComp(1)">基础</div>
                <div class="choice" :class="{'cur': selectPro == 2}" @click="setComp(2)">布局</div>
            </div>
            <div class="pannel">
                <keep-alive>
                    <component v-bind:is="curPro"></component>
                </keep-alive>

            </div>
        </div>
</template>

<script>
import '../common.css';
import { mapState } from 'vuex';
import Basic from './property/Basic';
import Layout from './property/Layout';

export default {
    data() {
        return {
            curPro: Basic,
            selectPro: 1
        }
    },
    computed: {
        ...mapState({
            showPop: state => state.showPropertyPanel
        })
    },
    methods: {
        closeProp() {
            this.$store.commit('close_property_pannel');
        },
        setComp(item) {
            this.selectPro = item;
            this.curPro = item == 1 ? Basic : Layout;
        }
    },
    mounted() {}
}
</script>

<style lang="less" scoped>
    .pannel-choice {
        display: flex;
        margin-top: 30px;
    }
    .choice {
        padding: 8px 30px;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        border: 1px solid #ccc;
        cursor: pointer;
        background: #f0f0f0;
        margin-bottom: -1px;
        margin-right: -1px;
        user-select: none;
        font-weight: bold;

        &.cur {
            background: #e0e0e0;
        }
        &:hover {
            background: #e0e0e0;
        }
    }
    .pannel {
        // background: #e0e0e0;
        padding: 25px 10px;
        height: 100%;
        border-top: 1px solid #ccc;
    }

    .property-wrapper {
        width: 262px;
        height: 100vh;
        position: absolute;
        right: 0;
        top: 0;
        background: #fff;
        transform: translateX(100%);
        transition: all ease-in-out .2s;
        padding: 20px 0;
        &.show {
            transform: translateX(0);
        }
        .anticon-close {
            font-size: 24px;
            position: absolute;
            top: 28px;
            right: 28px;
        }
        h2 {
            padding-left: 20px;
        }
    }
</style>