import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { FluidNavigator } from 'react-navigation-fluid-transitions';

import Home from './app/Containers/Home/Home.screen';
import Customize from './app/Containers/Customize/Customize.screen';
import CustomizeCoffe from './app/Containers/CustomizeCoffe/CustomizeCoffe.screen';
import OrderCoffee from './app/Containers/OrderCoffee/OrderCoffee.screen';
import Chekcout from './app/Containers/Checkout/Chekcout.screen';

const NavigatorTranslation = FluidNavigator({
  Home: {
    screen: Home
  },
  Customize: {
    screen: Customize
  },
  CustomizeCoffe: {
    screen: CustomizeCoffe
  },
  OrderCoffee: {
    screen: OrderCoffee
  },
  Checkout: {
    screen: Chekcout
  }
});

const RootApps = createAppContainer(NavigatorTranslation);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <RootApps />
    );
  }
}

export default App;
