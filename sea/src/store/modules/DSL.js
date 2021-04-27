import Vue from 'vue';
import {
    ADD_DSL_ITEM,
    REMOVE_DSL_ITEM,
    EDIT_DSL_ITEM
} from '../mutaion-types'
import getItemFromDSLByBFS from '../../utils/getItemByBFS';

const app = {
    namespaced: true,
    state: {
        DSL: {
            type: 'document',
            children: []
        }
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
        [EDIT_DSL_ITEM](state, {property, value, innerproperty, innervalue}) {
            let curDSL = getItemFromDSLByBFS(state.DSL, this.state.property.curnode);
            if (value != '') {
                Vue.set(curDSL, property, value);
                // curDSL[property] = value
            } else if (innervalue != '' && innerproperty != '') {
                Vue.set(curDSL[property], innerproperty, innervalue);
                // curDSL[property][innerproperty] = innervalue;
            }
            console.log(state.DSL);
        },
    }
}

export default app;