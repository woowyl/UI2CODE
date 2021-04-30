import Vue from 'vue';
import Vuex from 'vuex';

import property from './modules/property';
import DSL from './modules/DSL';
import ExportModel from './modules/export'

import {
    CLOSE_PROPERTY_PANNEL,
    OPEN_PROPERTY_PANNEL
} from './mutaion-types'


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        property,
        DSL,
        ExportModel
    },
    state: {
        showPropertyPanel: false
    },
    mutations: {
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