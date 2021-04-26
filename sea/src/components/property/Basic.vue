<template>
    <div>
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
        <div class="item-wrapper">
            <p class="title">字号</p>
            <a-input class="input" placeholder="字号" suffix="px"/>
        </div>
    </div>
</template>

<script>
export default {

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