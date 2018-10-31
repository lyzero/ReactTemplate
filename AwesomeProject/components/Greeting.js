import React, { Component } from 'react';
import { Text, View } from 'react-native';



export class Greeting extends Component {
  render() {
    console.log("Render todos", this.props.todos)
    return (
      <View>
        <Text>Hello {this.props.name}!</Text>
      </View>
    );
  }
}