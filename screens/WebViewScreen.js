import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,WebView
} from 'react-native';

type Props = {};

class WebViewScreen extends Component<Props> {


    render() {
        return (

            <WebView

                source={{uri: 'https://facebook.github.io/react-native/docs/webview'}}
                style={{marginTop: 20}}

            />

        );
    }

}

export default WebViewScreen;