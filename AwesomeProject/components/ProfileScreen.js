
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TouchableHighlight, Image, ScrollView } from 'react-native';
import { Greeting } from './Greeting'

export class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profiles',
    };
    render() {
        const { navigation } = this.props;
        const otherParam = navigation.getParam('name', 'default profile name');
        return (
            <ScrollView>
                <Greeting name={otherParam} />
                <Image source={require('./Home/HomeAssets/Companions/Girl2.jpg')} style={styles.companions} />

                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>What up to</Text>
                <View>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./Home/HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Text>Yellow Stone Stone....</Text>
                    </View>

                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./Home/HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Text>Yellow Stone Stone....</Text>
                    </View>

                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./Home/HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Text>Yellow Stone Stone....</Text>
                    </View>
                </View>




                <Text style={{ fontWeight: 'bold', marginTop: 20 }}>TimeLine</Text>
                <View>
                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./Home/HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Text>Yellow Stone Stone....</Text>
                    </View>

                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./Home/HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Text>Yellow Stone Stone....</Text>
                    </View>

                    <View style={{ flexDirection: 'row', top: 10, }}>
                        <Image source={require('./Home/HomeAssets/Destinations/YellowStone.jpg')} style={{ marginLeft: 16, width: 100, height: 100, marginTop: 5, }} />
                        <Text>Yellow Stone Stone....</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
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
    companions: {
        width: 100,
        height: 100,
    }
});
