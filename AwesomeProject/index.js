/** @format */

import { AppRegistry } from 'react-native';
import App from './components/App';
import { name as appName } from './app.json';
import { createStore } from 'redux';
import { ProfileScreen } from './components/ProfileScreen'

import reducer from './core/flux/store'
export const store = createStore(reducer)

AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(ProfileScreen, () => ProfileScreen);