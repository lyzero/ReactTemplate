import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { BlinkComponent } from '../AwesomeProject/Blink';
import { ProfileScreen } from '../AwesomeProject/ProfileScreen';
import { store } from '../AwesomeProject'
import { addTodo } from './core/flux/actions'
import { AddToDoList } from './AddToDoList'
import { FetchExample } from './FetchExample'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    console.log("linyin");
    console.log(store.getState());
    store.dispatch(addTodo('Learn about actions'))
    console.log(store.getState());
    return (
      <View>
        <Button
          title="Props Example Profile"
          onPress={() =>
            navigate('Profile', { name: 'Jane' })
          }
        />
        <Button
          title="Blink State Example"
          onPress={() =>
            navigate('Blink', { text: 'Blink Text' })
          }
        />

        <Button
          title="AddToDoList"
          onPress={() =>
            navigate('AddToDoList')
          }
        />
        <Button
          title="FetchExample"
          onPress={() =>
            navigate('FetchExampleComponent')
          }
        />
      </View>
    );
  }
}

const App = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Blink: { screen: BlinkComponent },
  AddToDoList: { screen: AddToDoList },
  FetchExampleComponent: { screen: FetchExample }
});

export default App;
