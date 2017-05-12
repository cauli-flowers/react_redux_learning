
const display = (text) => {
    return {type: 'DISPLAY_TEXT', text: text}
}

const change = (text) => {
    return {type: 'CHANGE_TEXT', text}
}

export {display, change};
