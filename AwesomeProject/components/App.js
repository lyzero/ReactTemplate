import React from 'react';
import { Platform, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { BlinkComponent } from './Blink';
import { ProfileScreen } from './ProfileScreen';
import { store } from '../'
import { addTodo } from '../core/flux/actions'
import { AddToDoList } from './AddToDoList'
import { FetchExample } from './FetchExample'
import { LandingPage } from './Home/LandingPage';
import { WelcomePage } from './Login/WelcomePage';

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
        <Button
          title="LandingPage"
          onPress={() =>
            navigate('LandingScreen', { navigation: navigate })
          }
        />
        <Button
          title="WelcomePage"
          onPress={() =>
            navigate('WelcomeScreen', { navigation: navigate })
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
  FetchExampleComponent: { screen: FetchExample },
  LandingScreen: { screen: LandingPage },
  WelcomeScreen: { screen: WelcomePage },
});

export default App;
