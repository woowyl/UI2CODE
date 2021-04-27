import { SET_CURRENT_NODE } from '../mutaion-types'

const app = {
    state: {
        curnode: 0
    },
    mutations: {
        [SET_CURRENT_NODE](state, { nodeid }) {
            state.curnode = nodeid;
        }
    }
}

export default app;