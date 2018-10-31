import React, { Component } from 'react';
import { store } from '../AwesomeProject'
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { connectWithStore } from './connectWithStore'
import { addTodo } from './core/flux/actions'


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