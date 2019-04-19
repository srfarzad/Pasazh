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

import {createStackNavigator,createAppContainer} from 'react-navigation';
//import RegisterScreen from './screens/RegisterScreen';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class HomeScreen extends React.Component<Props> {




    render() {
        return (

                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>


                    <Button title='Register' onPress={()=>{

                        this.props.navigation.push('Register')
                        //this.props.navigation.goBack()

                    }}  />

                </View>

        );
    }

}


class RegisterScreen extends Component<Props> {


    render() {
        return (

            <View>
                <Text>RegisterScreen</Text>


            </View>

        );
    }

}

const AppNavigator = createStackNavigator({

   Home :{
      screen : HomeScreen
   } ,
    Register : {
       screen : RegisterScreen
    },

});


 export default createAppContainer(AppNavigator);



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
