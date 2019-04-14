import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import get from 'lodash/get';

import { Styles } from './OrderCoffee.style';
import { StylesGlobal } from '../../Themes/StyleGlobal';
import { Colors } from '../../Themes/Colors';
import TextStatic from '../../Components/TextStatic/TextStatic.component';

class OrderCoffee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }

  onChangeInput = field => (value) => {
    this.setState({
      [field]: value
    })
  };
  
  navigateToScreen = (image, shared) => () => {
    const { navigation } = this.props;
    navigation.navigate('Checkout', { image, shared });
  }

  render() {
    const { navigation } = this.props;
    const { name } = this.state;
    const images = get(navigation, 'state.params.image', '');
    const shared = get(navigation, 'state.params.shared', '');

    return (
      <View style={Styles.container}>
        <View style={Styles. mainContainer}>
          <Transition shared={shared}>
            <Image
              source={images}
              style={Styles.imgSize}
            />
          </Transition>
          <View style={StylesGlobal.marginVertical(24)}>
            <TextStatic
              text="Who are you ordering it for ?"
              styleText={Styles.textTitle}
            />
          </View>
          <View style={StylesGlobal.marginTop(8)}>
            <View style={Styles.viewTextInput}>
              <TextInput
                value={name}
                style={Styles.textInput}
                onChangeText={this.onChangeInput('name')}
                placeholder="Name"
                placeholderTextColor={Colors.WHITE}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={this.navigateToScreen(images, shared)}>
          <View style={Styles.btnContainer}>
            <TextStatic
              text="NEXT"
              styleText={Styles.btnTitle}
            />
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

export default OrderCoffee;
