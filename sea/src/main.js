import Vue from 'vue'
import App from './App.vue'

import './global.less'

Vue.config.productionTip = false

window.vueBus = new Vue();
window.DSL = {
    type: 'document',
    children: []
}
window.nodeID = 0;

new Vue({
    render: h => h(App),
}).$mount('#app')
