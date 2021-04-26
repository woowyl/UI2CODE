import Vue from 'vue';
import Vuex from 'vuex';

import getItemFromDSLByBFS from './../utils/getItemByBFS';

import {
    ADD_DSL_ITEM,
    REMOVE_DSL_ITEM,
    EDIT_DSL_ITEM,
    CLOSE_PROPERTY_PANNEL,
    OPEN_PROPERTY_PANNEL
} from './mutaion-types'

import property from './modules/property'
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        property
    },
    state: {
        DSL: {
            type: 'document',
            children: []
        },
        showPropertyPanel: false
    },
    mutations: {
        [ADD_DSL_ITEM](state, {position, dsl, index}) {
            if (position ===0) {
                // todo: 根据不同的位置插入元素，不仅仅是push
                state.DSL.children.splice(index, 0, dsl);
            } else {
                let curDSL = getItemFromDSLByBFS(state.DSL, position);
                curDSL && curDSL.children.splice(index, 0, dsl);
            }
        },
        // 删除DSL ITEM
        [REMOVE_DSL_ITEM](state, payload) {
            let curDSL = getItemFromDSLByBFS(state.DSL, payload.nodeid);
            curDSL && curDSL.__parentNode.splice(curDSL.__index, 1);
        },
        // 编辑DSL ITEM
        [EDIT_DSL_ITEM](state) {
            console.log(state);
        },


        [CLOSE_PROPERTY_PANNEL](state) {
            state.showPropertyPanel = false;
        },
        [OPEN_PROPERTY_PANNEL](state) {
            state.showPropertyPanel = true;
        }
        
    },
    actions: {
        
    }
})