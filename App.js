/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Alert,
    ScrollView,
    KeyboardAvoidingView,
    FlatList, Image
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {


    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            isShow: true,
        }

    }

    componentDidMount(){

    }

    increase() {

        this.setState({counter: this.state.counter + 1});

    }

    decrease() {
        this.setState({counter: this.state.counter - 1});

    }


    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                    <TextInput placeholder='enter data'/>
                    <Button title="Click"/>
                    <Button title='test' onPress={() => {

                        Alert.alert('Are you sure', 'Exit', [

                            {text: 'Yes', onPress: () => console.log('test')},
                            {text: 'No', onPress: () => console.log('test')}

                        ],)

                    }}/>

                    <FlatList

                        data={[
                            {key: 'Ali'}, {key: 'Ali'}, {key: 'Ali'}, {key: 'Ali'}, {key: 'Ali'},
                        ]}

                        renderItem={({item}) => <Text>{item.key}</Text>}
                    />


                    <Image source={require('./src/images/gnote.png')} style={{width: 50, height: 50}}/>

                    <Image source={{uri: 'https://s.cafebazaar.ir/1/icons/ir.tgbs.peccharge_512x512.png'}}
                           style={{width: 50, height: 50}}/>


                    <View style={{flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15}}>


                        <Button title='-' onPress={() => {

                            this.decrease()

                        }}/>


                        <Text> {this.state.counter} </Text>


                        <Button title='+' onPress={() => {

                            this.increase()
                        }}/>

                    </View>

                </View>
            </ScrollView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
