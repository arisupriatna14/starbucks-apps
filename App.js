/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Home from './app/Containers/Home/Home.screen';
import Customize from './app/Containers/Customize/Customize.screen';

const NavigatorTranslation = FluidNavigator({
  Home: {
    screen: Home
  },
  Customize: {
    screen: Customize
  }
})

const RootApps = createAppContainer(NavigatorTranslation);

class App extends Component {
  render() {
    return (
      <RootApps />
    );
  }
}

export default App;
