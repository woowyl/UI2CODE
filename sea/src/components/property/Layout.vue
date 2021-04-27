<template>
    <div>
        <!-- flex-direction -->
        <div class="item-wrapper">
            <p class="property">
                <span class="key">flex-direction:</span>
                <span class="value">{{direction}}</span>
            </p>
            <div class="visal direction">
                <div class="item column" 
                    :class="{'cur': direction == 'row'}"
                    @click="setProp('direction', 'row')">
                    <div class="block-wrapper row center" 
                        style="margin-top:5px">
                        <div class="block" 
                            style="height: 20px; margin-right:3px">
                        </div>
                        <div class="block-fill"  style="height: 20px"></div>
                    </div>
                    <a-icon 
                        type="swap-right"
                        :style="{'margin-top': '-3px',
                                transform: 'scaleX(1.8)'}"/>
                </div>
                <div class="item row" 
                    :class="{'cur': direction == 'column'}"
                    @click="setProp('direction', 'column')">
                    <div class="block-wrapper column center" 
                        style="margin-left:5px">
                        <div class="block" 
                            style="width: 20px; margin-bottom:2px;"></div>
                        <div class="block-fill"
                            style="width: 20px;">
                        </div>
                    </div>
                    <a-icon 
                        type="swap-right"
                        :style="{transform: 'rotateZ(90deg) scaleX(1.8) translateY(11px)'}"/>
                </div>
            </div>
        </div> 
        <!-- flex-wrap -->
        <div class="item-wrapper flex-wrap" 
            :class="{'direction-column': direction == 'column'}">
            <p class="property">
                <span class="key">flex-wrap:</span>
                <span class="value">{{flexWrap}}</span>
            </p>
            <div class="visal">
                <div class="item center row"
                    :class="{'cur': flexWrap == 'nowrap'}"
                    @click="setProp('flexWrap', 'nowrap')"
                    >
                    <div class="block"></div>
                    <div class="block-fill"></div>
                    <div class="block"></div>
                </div>
                <div class="item row wrap"
                    :class="{'cur': flexWrap == 'wrap'}"
                    @click="setProp('flexWrap', 'wrap')"
                    style="align-content: space-evenly">
                    <div class="block"></div>
                    <div class="block-fill"></div>
                    <div class="block"></div>
                    <div class="block-fill"></div>
                    <div class="block"></div>
                    <div class="block-fill"></div>
                </div>
            </div>
        </div>
        <!-- align-content -->
        <div class="item-wrapper align-content" 
            :class="{'direction-column': direction == 'column'}">
            <p class="property">
                <span class="key">align-content:</span>
                <span class="value">{{alignContent}}</span>
            </p>
            <div class="visal">
                <div class="item column center"
                    :class="{'cur': alignContent == 'center'}"
                    @click="setProp('alignContent', 'center')">
                    <div class="block-fill"></div>
                    <div class="base-line" style="margin: 3px 0"></div>
                    <div class="block-fill"></div>
                </div>
                <div class="item column center"
                    :class="{'cur': alignContent == 'flex-start'}"
                    @click="setProp('alignContent', 'flex-start')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin-bottom:4px"></div>
                    <div class="block-fill"></div>
                </div>
                <div class="item column center"
                    :class="{'cur': alignContent == 'flex-end'}"
                    @click="setProp('alignContent', 'flex-end')">
                    <div class="block-fill" style="margin-bottom:4px"></div>
                    <div class="block-fill"></div>
                    <div class="base-line"></div>
                </div>
                <div class="item center column"
                    :class="{'cur': alignContent == 'space-around'}"
                    @click="setProp('alignContent', 'space-around')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin:2px 0"></div>
                    <div class="block-fill" style="margin:2px 0"></div>
                    <div class="base-line"></div>
                </div>
                <div class="item center column"
                    :class="{'cur': alignContent == 'space-between'}"
                    @click="setProp('alignContent', 'space-between')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin-bottom:3px;"></div>
                    <div class="block-fill" style="margin-top:2px;"></div>
                    <div class="base-line"></div>
                </div>
                <div class="item center column"
                    :class="{'cur': alignContent == 'stretch'}"
                    @click="setProp('alignContent', 'stretch')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="height: 12px; margin-bottom:2px;"></div>
                    <div class="block-fill" style="height: 12px;"></div>
                    <div class="base-line"></div>
                </div>
            </div>
        </div>
        <!-- justify-content -->
        <div class="item-wrapper justify-content" 
            :class="{'direction-column': direction == 'column'}">
            <p class="property">
                <span class="key">justify-content:</span>
                <span class="value">{{justifyContent}}</span>
            </p>
            <div class="visal">
                <div class="item center"
                    :class="{'cur': justifyContent == 'center'}"
                    @click="setProp('justifyContent', 'center')">
                    <div class="block-fill"></div>
                    <div class="base-line" style="margin:0 2px"></div>
                    <div class="block-fill"></div>
                </div>
                <div class="item center"
                    :class="{'cur': justifyContent == 'flex-start'}"
                    @click="setProp('justifyContent', 'flex-start')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin-right: 3px;"></div>
                    <div class="block-fill"></div>
                </div>
                <div class="item center"
                    :class="{'cur': justifyContent == 'flex-end'}"
                    @click="setProp('justifyContent', 'flex-end')">
                    <div class="block-fill" style="margin-right: 3px;"></div>
                    <div class="block-fill"></div>
                    <div class="base-line"></div>
                </div>
                <div class="item center"
                    :class="{'cur': justifyContent == 'space-between'}"
                    @click="setProp('justifyContent', 'space-between')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin-right: 6px;"></div>
                    <div class="block-fill"></div>
                    <div class="base-line"></div>
                </div>
                <div class="item center"
                    :class="{'cur': justifyContent == 'space-around'}"
                    @click="setProp('justifyContent', 'space-around')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin: 0 3px 0 1px"></div>
                    <div class="block-fill" style="margin: 0 1px 0 3px"></div>
                    <div class="base-line"></div>
                </div>
                <div class="item center"
                    :class="{'cur': justifyContent == 'space-evenly'}"
                    @click="setProp('justifyContent', 'space-evenly')">
                    <div class="base-line"></div>
                    <div class="block-fill" style="margin: 0 2px 0 2px"></div>
                    <div class="block-fill" style="margin: 0 2px 0 2px"></div>
                    <div class="base-line"></div>
                </div>
            </div>
        </div>
        <!-- align-items -->
        <div class="item-wrapper align-items" 
            :class="{'direction-column': direction == 'column'}">
            <p class="property">
                <span class="key">align-items:</span>
                <span class="value">{{alignItems}}</span>
            </p>
            <div class="visal">
                <div class="item center"
                    :class="{'cur': alignItems == 'center'}"
                    @click="setProp('alignItems', 'center')">
                    <div class="block-fill short" style="margin-right:3px"></div>
                    <div class="block-fill"></div>
                    <div class="base-line absolute"></div>
                </div>
                <div class="item center column"
                    :class="{'cur': alignItems == 'flex-start'}"
                    @click="setProp('alignItems', 'flex-start')">
                    <div class="base-line"></div>
                    <div class="block-wrapper">
                        <div class="block-fill short" style="margin-right: 4px"></div>
                        <div class="block-fill"></div>
                    </div>
                </div>
                <div class="item center column"
                    :class="{'cur': alignItems == 'flex-end'}"
                    @click="setProp('alignItems', 'flex-end')">
                    <div class="block-wrapper" style="align-items: flex-end">
                        <div class="block-fill short" style="margin-right: 4px"></div>
                        <div class="block-fill"></div>
                    </div>
                    <div class="base-line"></div>
                </div>
                <div class="item center column"
                    :class="{'cur': alignItems == 'stretch'}"
                    @click="setProp('alignItems', 'stretch')">
                    <div class="base-line"></div>
                    <div class="block-wrapper">
                        <div class="block-fill long" style="margin-right: 4px"></div>
                        <div class="block-fill long"></div>
                    </div>
                    <div class="base-line"></div>
                </div>
                <div class="item center column norotate"
                    :class="{'cur': alignItems == 'baseline'}"
                    @click="setProp('alignItems', 'baseline')">
                    <div style="font-size: 26px; font-weight:bold; height:24px; line-height:24px">A</div>
                    <div class="base-line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Layout',
    data() {
        return {
            direction: 'normal',
            flexWrap: 'normal',
            alignContent: 'normal',
            justifyContent: 'normal',
            alignItems: 'normal'
        }
    },
    methods: {
        setProp(prop, value) {
            this[prop] = value
        }
    }
}
</script>

<style lang="less" scoped>
    @darkColor: #777;
    * {
        box-sizing: border-box;
    }
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
        }
        &.direction-column {
            .item {
                transform: rotateZ(-90deg);
                &.norotate {
                    transform: rotateZ(0);
                }
            }
        }
        .item {
            display: flex;
            width: 36px;
            height: 36px;
            align-content: center;
            justify-content: center;
            margin-right: 5px;
            border-radius: 4px;
            border: 1px solid @darkColor;
            color: @darkColor;
        }
        .cur {
            background: @darkColor;
            color: #fff;
            .block {
                border-color: #fff;
            }
            .block-fill {
                background: #fff;
            }
            .base-line {
                background: #fff;
            }
        }
    }
    .block-wrapper {
        display: flex;
    }
    .row {
        flex-direction: row;
    }
    .column {
        flex-direction: column;
    }
    .center {
        align-items: center;
        justify-content: center;
    }
    .wrap {
        flex-wrap: wrap;
    }
    .block {
        min-width: 10px;
        min-height: 10px;
        border: 2px solid @darkColor;
        border-radius: 4px;
    }
    .block-fill {
        min-width: 10px;
        min-height: 10px;
        border-radius: 4px;
        background: @darkColor;
    }
    .direction {
        .block-fill {
            height: 12px;
            width: 8px;
        }
        .block {
            height: 12px;
            width: 8px;
        }
    }
    .flex-wrap {
        .block-fill {
            height: 12px;
            width: 8px;
            margin: 0 1px;
        }
        .block {
            height: 12px;
            width: 8px;
        }
    }
    .align-content {
        .item {
            padding: 2px;
        }
        .block-fill {
            min-height: 0;
            height: 8px;
            width: 24px;
        }
        .base-line {
            &.vertical {
                width: 2px;
                height: 100%;
            }
            height: 2px;
            width: 100%;
            background: @darkColor;
        }
    }
    .justify-content{
        &.direction-column {
            .item {
                transform: rotateZ(90deg);
            }
        }
        .item {
            padding: 2px;
        }
        .block-fill {
            min-width: 0px;
            width: 8px;
            height: 20px;
        }
        .base-line {
            width: 2px;
            height: 100%;
            background: @darkColor;
        }
    }
    .align-items {
        .item {
            padding: 2px;
            position: relative;
        }
        .block-fill {
            min-width: 0px;
            width: 8px;
            height: 20px;
            &.short {
                height: 14px;
            }
            &.long {
                height: 25px;
            }
        }
        .base-line {
            height: 2px;
            background: @darkColor;
            width: 90%;
            &.absolute {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
            }
        }
    }
</style>