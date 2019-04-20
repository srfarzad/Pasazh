import React, {Component} from 'react';
import {
    StyleSheet, Text,
    View, FlatList, Image
} from 'react-native';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon
    , Card, CardItem,
    Accordion
} from 'native-base';

import ImageSlider from 'react-native-image-slider';

const images = [
    'http://androidsupport.ir/market/images/Netbarg.png',
    'http://androidsupport.ir/market/images/adpdigital_navad.png',
    'http://androidsupport.ir/market/images/findtaxisystem.png',
    'http://androidsupport.ir/market/images/learnit.png',
];


type Props = {};

class HomeScreen extends Component<Props> {


    getBestProduct() {

        fetch('http://androidsupport.ir/market/getBestApplications.php')
            .then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                this.setState({application: responseJson})
            })
            .catch((error) => {
                console.log("error")
            })


    }

    constructor(props) {
        super(props);

        this.state = {

            application: null,

        }


    }


    componentDidMount() {
        this.getBestProduct()
    }

    render() {
        return (

            <Container>

                <Content>

                    <View style={{height: 220}}>
                        <ImageSlider
                            loopBothSides
                            autoPlayWithInterval={3000}
                            images={images}

                        />
                    </View>

                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.application}
                        horizontal={true}
                        renderItem={({item}) =>


                            <Card>
                                <CardItem>
                                    <Body style={styles.container}>


                                    <Image source={{uri: "http://androidsupport.ir/market/images/" + item.icon}}
                                           style={{width: 96, height: 96}}/>
                                    <Text style={{fontFamily: 'IRANSans', fontSize: 14,}}> {item.title} </Text>

                                    </Body>
                                </CardItem>
                            </Card>


                        }


                    />


                </Content>


            </Container>

        );
    }

}

export default HomeScreen;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        alignContent: 'center'
    },

});