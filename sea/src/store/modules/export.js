import { 
    SET_EXPORT_MODEL,
    GET_DOM_TREE,
} from '../mutaion-types'

import getDOMTree from '../../utils/export/getDOMTree'

const app = {
    state: {
        showExportPanel: false,
        viewTree: '',
        styleTree: ''
    },
    mutations: {
        [SET_EXPORT_MODEL](state, {status}) {
            state.showExportPanel = status;
        },
        [GET_DOM_TREE](state) {
            let domTree = getDOMTree(this.state.DSL.DSL);
            state.viewTree = domTree.view;
            state.styleTree = domTree.style;
        }
    }
}

export default app;