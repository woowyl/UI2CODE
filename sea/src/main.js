import Vue from 'vue'
import App from './App.vue'
import store from './store/'
import './global.less'
import { Button, Input, Icon } from 'ant-design-vue';

Vue.component(Input.name, Input)
Vue.component(Button.name, Button)
Vue.component(Icon.name, Icon)
Icon.setTwoToneColor('#eb2f96');
Vue.config.productionTip = false


window.vueBus = new Vue();
window.DSL = {
    type: 'document',
    children: []
}
window.nodeID = 0;



window.vueApp = new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
