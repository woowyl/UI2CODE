const block = {
    name: 'Block',
    dsl: {
        nodeid: 1,
        type: 'block',
        tagName: 'div',
        children: [],
        attributes: {},
        computedStyle: {
            display: 'flex'
        }
    },
    html: `<div></div>`
}

const text = {
    name: '文字',
    dsl: {
        nodeid: 1,
        type: 'text',
        tagName: 'p',
        content: '这是一段文字这里是一段文字',
        children: [],
        attributes: {},
        computedStyle: {}
    },
    html: `<p>这是一段文字这里是一段文字</p>`
}

const image = {
    name: '图片',
    dsl: {
        nodeid: 1,
        type: 'img',
        tagName: 'img',
        children: [],
        attributes: {
            src: 'http://placekitten.com/200/200'
        },
        computedStyle: {},
    },
    html: `<img draggable="false" src="http://placekitten.com/200/200" />`
}



export const Elements = [block, text, image]