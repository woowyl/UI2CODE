export default {
    'colume-fill' : {
        dsl: {
            type: 'element',
               tagName: 'div',
               nodeid: 0,//自增，用于找到对应
               children: [{
                    type: 'element',
                    tagName: 'div',
                    nodeid: 0,
                    computedStyle: {
                        width: '100%'
                    }
                }, {
                    type: 'element',
                    tagname: 'div',
                    nodeid: 0,
                    attributes: [
                        {
                            name: 'class',
                            value: 'sec-div'
                        }
                    ],
                    computedStyle: {
                        width: '100%',
                        flex: 1
                    }
                }
                   
               ],
                attributes: [
                   {
                       name: 'class',
                       value: 'colume-fill'
                   }
               ],
               computedStyle: {
                   display: 'flex',
                   'align-items': 'center',
                   'flex-direction': 'column',
                   width: '100px'
               }
        }
    }
}