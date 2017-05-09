import React, {Component} from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    display() {
        this.setState()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Name Register
                </Text>
                <Text style={styles.instructions}>
                    Input name and tab registration button.
                </Text>
                <TextInput placeholder={'text...'} style={styles.textInput} editable={true} value={this.state.text} onChangeText={(text) => this.setState({text})}/>
                <TouchableOpacity onPress={this.display}>
                    <View style={styles.registButton}>
                        <Text style={styles.registButtonText}>registration</Text>
                    </View>
                </TouchableOpacity>
                <View>
                    <Text>{this.state.text}</Text>
                </View>
            </View>
        )
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

export default App;
