import {combineReducers} from 'redux';

const reducer1 = (state = {text: ''}, action) => {
    console.log("************ reducer1");
    console.info(action);
    switch (action.type) {
        case 'DISPLAY_TEXT':
            console.log('DISPLAY_TEXT');
            return Object.assign({}, state, {
                text: action.text
            });
        case 'CHANGE_TEXT':
            console.log('CHANGE_TEXT');
            return Object.assign({}, state, {
                text: state.text
            });
        default:
            console.log('other');
            return state;
    }
}

const reducer2 = (state = {text: ''}, action) => {
    console.log("************ reducer2");
    console.info(action);
    switch (action.type) {
        case 'REDUCER2_1':
            console.log('REDUCER2_1');
            return Object.assign({}, state, {
                text: action.text
            });
        case 'REDUCER2_2':
            console.log('REDUCER2_2');
            return Object.assign({}, state, {
                text: state.text
            });
        default:
            console.log('other');
            return state;
    }
}

const AppReducer = combineReducers({
    reducer1,
    reducer2,
});

export default AppReducer;
