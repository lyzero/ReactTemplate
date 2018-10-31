import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';


export class BlinkComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isShowingText: true };
    }

    componentDidMount() {
        this.setState(previousState => {
            return { isShowingText: true };
        });
    }

    render() {
        console.log("Debug")
        const { navigation } = this.props;
        const textShown = navigation.getParam('text', 'some default value');
        let display = this.state.isShowingText ? textShown : ' ';
        return (
            <View style={flex = 1}>
                <Text>{display}</Text>
                <Button
                    title="Hide Text"
                    onPress={() =>
                        this.setState(previousState => {
                            return { isShowingText: false };
                        })
                    }>
                </Button>
            </View>
        );
    }
}