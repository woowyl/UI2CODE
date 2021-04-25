import Vue from 'vue';
import Vuex from 'vuex';

import {
    ADD_DSL_ITEM,
    REMOVE_DSL_ITEM,
    EDIT_DSL_ITEM
} from './mutaion-types'


Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        DSL: {
            type: 'document',
            children: []
        }
    },
    mutations: {
        [ADD_DSL_ITEM](state, payload) {
            // console.log(payload);
            if (payload.position ===0) {
                state.DSL.children.push(payload.dsl)
                // console.log(state.DSL);
            } else {

                // console.log(state, payload);
            }
        },
        [REMOVE_DSL_ITEM](state) {
            console.log(state);
        },
        [EDIT_DSL_ITEM](state) {
            console.log(state);
        },
    },
    actions: {
        
    }
})