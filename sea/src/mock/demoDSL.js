export default {
    type: 'document',
    children: [
        {
            nodeid: 1,
            type: 'block',
            tagName: 'div',
            children: [
                {
                    nodeid: 2,
                    type: 'block',
                    tagName: 'div',
                    children: [
                        {
                            nodeid: 3,
                            type: 'text',
                            tagName: 'p',
                            content: '这是一段文字，这里是一段文字',
                            children: [],
                            attributes: {},
                            computedStyle: {}
                        }
                    ],
                    attributes: {},
                    computedStyle: {}
                },{
                    nodeid: 4,
                    type: 'text',
                    tagName: 'p',
                    content: '这是一段文字，这里是一段文字',
                    children: [],
                    attributes: {},
                    computedStyle: {}
                }
            ],
            attributes: {},
            computedStyle: {}
        },{
            nodeid: 5,
            type: 'block',
            tagName: 'div',
            children: [{
                nodeid: 6,
                type: 'img',
                tagName: 'img',
                children: [],
                attributes: {
                    src: 'http://placekitten.com/200/200'
                },
                computedStyle: {},
            }],
            attributes: {},
            computedStyle: {}
        },{
            nodeid: 7,
            type: 'img',
            tagName: 'img',
            children: [],
            attributes: {
                src: 'http://placekitten.com/200/200'
            },
            computedStyle: {},
        }
    ]
}