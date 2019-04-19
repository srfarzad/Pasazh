import React, {Component} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text,Accordion} from 'native-base';

type Props = {};

const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
];

import call from 'react-native-phone-call'

const args = {
    number: '9093900003', // String value with the number to call
    prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call
};

class SettingScreen extends Component<Props> {


    render() {
        return (

            <Container>

                <Header>

                    <Left>

                        <Icon name='menu'/>

                    </Left>

                    <Body>

                    <Title> Setting Page</Title>
                    </Body>

                </Header>

                <Content>

                    <Button block  onPress={()=>{

                    call(args).catch(console.error)

                    }} >
                        <Text>Call</Text>
                    </Button>



                    <Button block  onPress={()=>{

                       this.props.navigation.push('WebView')


                    }} >
                        <Text>Website</Text>
                    </Button>

                    <Button block  onPress={()=>{

                        this.props.navigation.push('LottieView')


                    }} >
                        <Text>LottieView</Text>
                    </Button>




                    <Accordion dataArray={dataArray} expanded={0}/>


                </Content>

                <Footer>

                    <FooterTab>
                        <Button full>
                            <Text>Footer</Text>
                        </Button>
                    </FooterTab>

                </Footer>


            </Container>

        );
    }

}

export default SettingScreen;