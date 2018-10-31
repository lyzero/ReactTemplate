
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { Greeting } from '../AwesomeProject/Greeting'

export class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };
    render() {
        const { navigate } = this.props.navigation;
        const { navigation } = this.props;
        const otherParam = navigation.getParam('name', 'some default value');
        return (
            <View style={styles.container}>
                <Greeting name='Person A' />
                <Greeting name='Person B' />
                <Greeting name='Person C' />
                <Text>Props passed from navigation : {otherParam}</Text>
            </View>
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
