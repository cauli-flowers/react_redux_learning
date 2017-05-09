import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import display from './actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     text: '',
        // }
    }

    render() {
        console.info(this.props);
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Name Register
                </Text>
                <Text style={styles.instructions}>
                    Input name and tab registration button.
                </Text>
                <TextInput placeholder={'text...'} style={styles.textInput} editable={true} value={this.state} onChangeText={() => {}}/>
                <TouchableOpacity onPress={this.props.display}>
                    <View style={styles.registButton}>
                        <Text style={styles.registButtonText}>registration</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.instructions}>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        display: () => dispatch(display())
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        paddingTop: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    textInput: {
        height: 35,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        margin: 30,
        paddingLeft: 5,
        paddingRight: 5
    },
    registButton: {
        borderWidth: 1,
        borderColor: 'gray',
        backgroundColor: 'gray',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 30,
        marginLeft: 30,
        borderRadius: 3,
        paddingLeft: 5,
        paddingRight: 5
    },
    registButtonText: {
        color: 'white'
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
