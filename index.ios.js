import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput} from 'react-native';
import App from './src/App';

export default class valueChange extends Component {
    render() {
        return (
            <App />
        );
    }
}



AppRegistry.registerComponent('valueChange', () => valueChange);
