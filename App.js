/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,Button
} from 'react-native';

import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator,
    createDrawerNavigator
} from 'react-navigation';
import RegisterScreen from './screens/RegisterScreen';
import DashboardScreen from "./screens/DashboardScreen";
import SettingScreen from "./screens/SettingScreen";
import CategoryScreen from "./screens/CategoryScreen";
import HomeScreen from "./screens/HomeScreen";
import WebViewScreen from "./screens/WebViewScreen";
import LottieViewScreen from "./screens/LottieViewScreen";
import firebase from 'react-native-firebase';
import { AdMobBanner } from 'react-native-admob';


type Props = {};

class LoginScreen extends React.Component<Props> {


    register() {
        firebase.auth().createUserWithEmailAndPassword("test123@gmail.com","@!KK3222")
            .then((user)=> {

                Alert.alert('Welcome to App')

        })
            .catch((error)=> {
                console.log(error)
            })
    }

    login(){

        firebase.auth().signInWithEmailAndPassword("test123@gmail.com","@!KK3222")
            .then((user)=> {
               // Alert.alert(user)
                console.log(user)
                console.log(user.email)

            })
            .catch((error)=>{
                console.log(error)
               // Alert.alert('error')
            })

    }


    render() {
        return (


            <View style={styles.container}>


                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]}
                           source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={[styles.icon, styles.inputIcon]}
                           source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'/>
                </View>

                <TouchableOpacity style={styles.restoreButtonContainer}>
                    <Text>Forgot?</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]}

                                  onPress={()=> {

                                      this.props.navigation.push('Dashboard')

                                  }}

                >
                    <Text style={styles.loginText}>ورود</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer}

                                  onPress={()=> {

                                      this.props.navigation.push('Register')

                                  }}

                >
                    <Text>عضویت</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}  onPress={()=> {

                    this.register()

                }} >
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon}
                               source={{uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Continue with facebook</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]} onPress={()=> {


                    this.login()

                }} >
                    <View style={styles.socialButtonContent}>
                        <Image style={styles.icon} source={{uri: 'https://png.icons8.com/google/androidL/40/FFFFFF'}}/>
                        <Text style={styles.loginText}>Sign in with google</Text>
                    </View>
                </TouchableOpacity>


                <AdMobBanner
                    adSize="fullBanner"
                    adUnitID="ca-app-pub-3940256099942544/6300978111"
                    onAdFailedToLoad={error => console.log(error)}
                />



            </View>


            //this.props.navigation.push('Register')
            //this.props.navigation.goBack()


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

    Dashboard: {
        screen: DashboardStackNavigator
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
    WebView: {
        screen: WebViewScreen
    },

    LottieView: {
        screen: LottieViewScreen
    },

});


export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B0E0E6',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        borderBottomWidth: 1,
        width:250,
        height:45,
        marginBottom:15,
        flexDirection: 'row',
        alignItems:'center'
    },
    inputs:{
        height:45,
        marginLeft:16,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
    icon:{
        width:30,
        height:30,
    },
    inputIcon:{
        marginLeft:15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height:45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
        width:250,
        borderRadius:30,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: 'white',
    },
    restoreButtonContainer:{
        width:250,
        marginBottom:15,
        alignItems: 'flex-end'
    },
    socialButtonContent:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon:{
        color: "#FFFFFF",
        marginRight:5
    }
});