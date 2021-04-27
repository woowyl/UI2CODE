<template>
    <div>
        <div class="item-wrapper">
            <p class="title">标签名</p>
            <a-input 
                class="input" 
                v-model="tagname"
                @change="setProp('tagname')"
                placeholder="标签名" />
        </div>
        <div class="item-wrapper">
            <p class="title">class名(多个用空格隔开)</p>
            <a-input 
                class="input" 
                v-model="classlist"
                @change="setProp('classlist')"
                placeholder="class" />
        </div>
        <div class="item-wrapper">
            <p class="title">宽度</p>
            <a-input
                v-model="width"
                @change="setProp('width')" 
                class="input" 
                placeholder="宽度" 
                suffix="px"/>
        </div>
        <div class="item-wrapper">
            <p class="title">高度</p>
            <a-input
                v-model="height"
                @change="setProp('height')" 
                class="input" 
                placeholder="高度" 
                suffix="px"/>
        </div>
        <div class="item-wrapper">
            <p class="title">字号</p>
            <a-input
                v-model="fontsize"
                @change="setProp('fontsize')" 
                class="input" 
                placeholder="字号" 
                suffix="px"/>
        </div>
        <div class="item-wrapper">
            <p class="title">色号</p>
            <a-input
                v-model="color"
                @change="setProp('color')" 
                class="input" 
                placeholder="色值"/>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
            tagname: '',
            classlist: '',
            width: '',
            height: '',
            fontsize: '',
            color: ''
        }
    },
    computed: {
        ...mapState([
            'curnode',
        ])
    },
    methods: {
        setProp(type) {
            let commitValue = {
                type: 'DSL/edit_dsl_item',
                property: '',
                value: '',
                innerproperty: '',
                innervalue: ''
            }
            switch (type) {
                case 'tagname':
                    commitValue.property = 'tagName';
                    commitValue.value = this.tagname;
                    break;
                case 'classlist':
                    commitValue.property = 'attributes';
                    commitValue.innerproperty = 'class';
                    commitValue.innervalue = this.classlist;
                    break;
                case 'width':
                    commitValue.property = 'computedStyle';
                    commitValue.innerproperty = 'width';
                    commitValue.innervalue = `${this.width}px`;
                    break;
                case 'height':
                    commitValue.property = 'computedStyle';
                    commitValue.innerproperty = 'height';
                    commitValue.innervalue = `${this.height}px`;
                    break;
                case 'fontsize':
                    commitValue.property = 'computedStyle';
                    commitValue.innerproperty = 'font-size';
                    commitValue.innervalue = `${this.fontsize}px`;
                    break;
                case 'color':
                    commitValue.property = 'computedStyle';
                    commitValue.innerproperty = 'color';
                    commitValue.innervalue = this.color;
                    break;
                default:
                    break;
            }
            this.$store.commit(commitValue);
        }
    }
}
</script>

<style lang="less" scoped>
    .item-wrapper {
        margin-bottom: 26px;
        .title {
            font-size: 14px;
            font-weight: bold;
            margin-bottom: 6px;
        }
    }
</style>