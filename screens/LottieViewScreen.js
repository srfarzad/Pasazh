import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import LottieView from 'lottie-react-native';

type Props = {};

class LottieViewScreen extends Component<Props> {


    render() {
        return <LottieView source={require('../data.json')}
                    autoPlay
                    loop/>

    }

}

export default LottieViewScreen;