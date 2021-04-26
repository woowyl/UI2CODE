<template>
    <div>
        <div class="item-wrapper">
            <p class="property">
                <span class="key">flex-direction:</span>
                <span class="value">row</span>
            </p>
            <div class="visal">
                <div class="item"></div>
            </div>
        </div>
        <div class="item-wrapper">
            <p class="property">
                <span class="key">flex-wrap:</span>
                <span class="value">nowrap</span>
            </p>
            <div class="visal">
                <div class="item"></div>
            </div>
        </div>
        <div class="item-wrapper">
            <p class="property">
                <span class="key">align-content:</span>
                <span class="value">row</span>
            </p>
            <div class="visal">
                <div class="item"></div>
            </div>
        </div>
        <div class="item-wrapper">
            <p class="property">
                <span class="key">justify-content:</span>
                <span class="value">normal</span>
            </p>
            <div class="visal">
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
                <div class="item"></div>
            </div>
        </div>
        <div class="item-wrapper">
            <p class="property">
                <span class="key">align-items:</span>
                <span class="value">row</span>
            </p>
            <div class="visal">
                <div class="item"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
  .item-wrapper {
    .property {
        font-size: 16px;
        color: #222;
        .key {
            font-weight: bold;
            margin-right: 4px;
        }
        .value {
            color: #666;
        }
    }
    .visal {
        display: flex;
        flex-wrap: nowrap;
        .item {
            display: flex;
            width: 35px;
            height: 35px;
            margin-right: 5px;
            border-radius: 4px;
            border: 1px solid #333;
        }
    }
  }
</style>