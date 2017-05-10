import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';
import App from './src/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './src/reducers/reducer';

const store = createStore(reducer);

export default class valueChange extends Component {
    render() {

        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}



AppRegistry.registerComponent('valueChange', () => valueChange);
