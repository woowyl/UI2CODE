import { 
    SET_EXPORT_MODEL,
    GET_DOM_TREE,
    GET_LESS_TREE
} from '../mutaion-types'

import getDOMTree from '../../utils/export/getDOMTree'

const app = {
    state: {
        showExportPanel: false
    },
    mutations: {
        [SET_EXPORT_MODEL](state, {status}) {
            console.log('in mudule export', status);
            state.showExportPanel = status;
        },
        [GET_DOM_TREE](state, {type}) {
            
            getDOMTree(this.state.DSL.DSL)
            console.log('in mudule export', state, type);
        },
        [GET_LESS_TREE](state, {type}) {
            console.log('in mudule export', state, type);
        }
    }
}

export default app;