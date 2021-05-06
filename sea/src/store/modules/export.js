import { 
    SET_EXPORT_MODEL,
    GET_DOM_TREE,
    GET_LESS_TREE
} from '../mutaion-types'

import getDOMTree from '../../utils/export/getDOMTree'

const app = {
    state: {
        showExportPanel: false,
        domTree: '',
        lessString: ''
    },
    mutations: {
        [SET_EXPORT_MODEL](state, {status}) {
            state.showExportPanel = status;
        },
        [GET_DOM_TREE](state) {
            let domTree = getDOMTree(this.state.DSL.DSL)
            state.domTree = domTree;
        },
        [GET_LESS_TREE](state, {type}) {
            console.log('in mudule export3', state, type);
        }
    }
}

export default app;