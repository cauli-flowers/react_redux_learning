import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {display, change} from './actions/actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    }

    setValue() {
        const {display} = this.props;
        display(this.state.text);
        this.setState({text: ''});
    }

    render() {
        const {display, change} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    NAME Registration app
                </Text>
                <Text style={styles.instructions}>
                    Input your name {"\n"}
                    and{"\n"}
                    tap the registration button.
                </Text>
                <TextInput placeholder={'your name...'} style={styles.textInput} editable={true} value={this.state.text} onChangeText={(text) => this.setState({text})}/>
                <TouchableOpacity onPress={this.setValue.bind(this)}>
                    <View style={styles.registButton}>
                        <Text style={styles.registButtonText}>registration</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text style={styles.result}>
                        {this.props.text !== '' ? 'Your name is ' + this.props.text : ''}
                    </Text>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        text: state.reducer1.text
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        display: (text) => dispatch(display(text)),
        change: () => dispatch(change())
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
        margin: 10,
        fontWeight: 'bold'
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 30,
    },
    result: {
        textAlign: 'center',
        color: '#333333',
        marginTop: 30,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#F7819F'
    },
    textInput: {
        height: 35,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 3,
        alignItems: 'center',
        margin: 30,
        marginBottom: 10,
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
