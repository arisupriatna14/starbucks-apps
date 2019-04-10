import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
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
