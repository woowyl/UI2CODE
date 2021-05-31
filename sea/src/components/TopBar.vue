<template>
    <div class="fixed-top-bar">
        <a-button style="margin-left: 8px">
            <a-icon type="upload" />
            上传图片 
        </a-button>
        <div class="export">
            <a-dropdown>
                <a-menu slot="overlay" @click="handleMenuClick">
                    <a-menu-item key="1"> <a-icon type="html5" />WEB </a-menu-item>
                    <a-menu-item key="2"> <a-icon type="block" />小程序 </a-menu-item>
                    <a-menu-item key="3"> <a-icon type="mobile" />APP </a-menu-item>
                </a-menu>
                <a-button style="margin-left: 8px">
                    <a-icon type="export" />
                    代码导出 
                    <a-icon type="down" /> 
                </a-button>
            </a-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleMenuClick() {
            this.$store.commit({
                type: 'set_export_model',
                status: true
            })
            this.$store.commit({
                type: 'get_dom_tree',
                status: true
            })
            // this.$store.commit({
            //     type: 'get_less_tree',
            //     status: true
            // })
        }
    }
}
</script>

<style lang="less" scoped>
    .fixed-top-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 54px;
        background: #eaedf0;
        padding: 0 30px;
        border-bottom: 1px solid #bfbfbf;
    }
</style>