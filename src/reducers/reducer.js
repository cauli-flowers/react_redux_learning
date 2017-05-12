
const reducer = (state = {text: ''}, action) => {
    switch (action.type) {
        case 'DISPLAY_TEXT':
            return Object.assign({}, state, {
                text: action.text
            });
        case 'CHANGE_TEXT':
            return Object.assign({}, state, {
                text: state.text
            });
        default:
            return state;
    }
}

export default reducer;
