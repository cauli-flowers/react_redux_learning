
const reducer = (state = '', action) => {
    switch (action.type) {
        case 'DISPLAY_TEXT':
            return {
                type: 'DISPLAY_TEXT',
                text: state,
            }
        default:
            return {
                type: action.type,
                text: state,
            }
    }
}

export default reducer;
