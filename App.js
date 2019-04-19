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

import {createStackNavigator, createAppContainer,createBottomTabNavigator,createDrawerNavigator} from 'react-navigation';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";
import CategoryScreen from "./screens/CategoryScreen";
import HomeScreen from "./screens/HomeScreen";


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

class LoginScreen extends React.Component<Props> {


    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to React Native!</Text>


                <TextInput
                    placeholder='enter your username'
                />

                <TextInput
                    placeholder='enter your password'
                />


                <Button title='Dashboard' onPress={() => {

                    this.props.navigation.push('Dashboard')
                    //this.props.navigation.goBack()

                }}/>


                <Button title='Register' onPress={() => {

                    this.props.navigation.push('Register')
                    //this.props.navigation.goBack()

                }}/>

            </View>

        );
    }

}

/*
class RegisterScreen extends Component<Props> {


    render() {
        return (

            <View>
                <Text>RegisterScreen</Text>


            </View>

        );
    }

}*/


const DashboardTabNavigator = createBottomTabNavigator({
        HomeScreen, CategoryScreen, SettingScreen
    },
    {
        navigationOptions: ({navigation}) => {
            const {routeName} = navigation.state.routes[navigation.state.index];
            return {
                headerTitle: routeName
            };
        }
    }
);


const DashboardStackNavigator = createStackNavigator({

    dashboardTabNavigation: DashboardTabNavigator

});

const DashboardDrawerNavigator = createDrawerNavigator({

    Dashboard : {
        screen : DashboardStackNavigator
    }

});


const AppNavigator = createStackNavigator({

    Login: {
        screen: LoginScreen
    },
    Register: {
        screen: RegisterScreen
    },

    Dashboard: {
        screen: DashboardDrawerNavigator
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
