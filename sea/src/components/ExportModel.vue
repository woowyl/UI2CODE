<template>
    <a-modal
        title="结果"
        width="900px"
        :visible="visible"
        :dialog-style="{ top: '50px' }"
        :confirm-loading="confirmLoading"
        @ok="handleOk"
        @cancel="handleCancel"
    >
        <div class="result">
            <!-- 加载图标 -->
            <a-spin
                wrapperClassName="spin"
                tip="Loading..."
                :spinning="spinning"
                size="large"/>
            <!-- 内容展示 -->
            <div class="code-wrapper">
                <textarea class="html code-block" :value="domTree"></textarea>
                <div class="header">
                    <p class="title">DOM</p>
                    <a-button
                        @click="copy"
                        size="small"
                        icon="copy"
                        class="copy">复制
                    </a-button>
                </div>
            </div>
            <div class="code-wrapper">
                <textarea class="less code-block"> </textarea>
                <div class="header">
                    <p class="title">CSS</p>
                    <a-button
                        @click="copy"
                        size="small"
                        icon="copy"
                        class="copy">复制
                    </a-button>
                </div>
            </div>
            
            
        </div>
    </a-modal>
</template>

<script>
import { mapState } from 'vuex';

export default {
    data() {
        return {
            confirmLoading: false,
            spinning: true
        };
    },
    computed: {
        ...mapState({
            visible: state => state.ExportModel.showExportPanel,
            domTree: state => state.ExportModel.domTree
        })
    },
    methods: {
        showModal() {
            this.visible = true;
        },
        handleOk() {
            this.confirmLoading = true;
            setTimeout(() => {
                this.$store.commit({
                    type: 'set_export_model',
                    status: false
                })
                this.confirmLoading = false;
            }, 2000);
        },
        handleCancel() {
            console.log('Clicked cancel button');
            this.$store.commit({
                type: 'set_export_model',
                status: false
            })
        },
        copy() {

        }
    },
    mounted() {
        this.spinning = true
        setTimeout(() => {
            this.spinning = false
        }, 2000)
    }
}
</script>

<style lang="less" scoped>
    .ant-modal-body {
        padding: 0;
    }
    .result {
        display: flex;
        width: 100%;
        height: 450px;
        position: relative;
        .ant-spin {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            z-index: 100;
            color: #fff;
        }
        .code-block {
            width: 100%;
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            outline: none;
            color: #fff;
            font-size: 16px;
            padding: 40px 15px;
        }
        .code-wrapper {
            position: relative;
            height: 100%;
            flex: 1;
        }
        .html {
            background: #2e2e2e;
        }
        .less {
            background: #1d1e22;
        }
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            position: absolute;
            width: 100%;
            padding: 5px 16px;
            .title {
                font-size: 19px;
                font-family: "Lato", "Lucida Grande", "Lucida Sans Unicode", Tahoma, Sans-Serif;
                color:rgb(170, 174, 188);
                font-weight: bold;
                margin-bottom: 0;
            }
        }
    }
</style>