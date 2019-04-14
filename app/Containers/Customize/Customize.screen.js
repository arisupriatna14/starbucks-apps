import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';
import get from 'lodash/get';
import PropTypes from 'prop-types';

import { StylesGlobal } from '../../Themes/StyleGlobal';
import { Images } from '../../Themes/Images';
import { Styles } from './Customize.style';
import TextStatic from '../../Components/TextStatic/TextStatic.component';

class Customize extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  navigateToScreen = (item) => () => {
    const { navigation } = this.props;
    navigation.navigate('CustomizeCoffe', { item });
  }

  render() {
    const { navigation } = this.props;
    const shared = get(navigation, 'state.params.item.shared', '');
    const image = get(navigation, 'state.params.item.image', '');
    const nameCoffee = get(navigation, 'state.params.item.name', '');
    const priceCoffee = get(navigation, 'state.params.item.price');
    const items = get(navigation, 'state.params.item', {});

    return (
      <View style={Styles.container}>
        <View style={Styles.containerHeader}>
          <TouchableOpacity onPress={this.goBack}>
            <Image
              source={Images.icBack}
              style={Styles.icBackSize}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesGlobal.flex(1), StylesGlobal.viewCenter]}>
          <View style={Styles.cardContainer}>
            <View style={StylesGlobal.marginHorizontal(24)}>
              <TouchableOpacity onPress={this.goBack}>
                <Transition shared={shared} appear="vertical">
                  <Image
                    source={image}
                    style={Styles.sizeImage}
                  />
                </Transition>
              </TouchableOpacity>
              <Transition appear="left">
                <TextStatic
                  text={nameCoffee}
                  styleText={Styles.textTitle}
                />
              </Transition>
              <Transition appear="right">
                <View style={StylesGlobal.marginVertical(16)}>
                  <TextStatic
                    text="Milk, Syrup, Ice, Green Sauce,
                    Special Toppings, Whipped Cream,
                    Green Tea Leaves"
                    styleText={Styles.textDesc}
                  />
                </View>
              </Transition>
              <Transition appear="right">
                <TextStatic
                  text={`$${priceCoffee}`}
                  styleText={Styles.textPrice}
                />
              </Transition>
              <View style={Styles.rowCenter}>
                <TouchableOpacity onPress={this.navigateToScreen(items)}>
                  <View style={Styles.btnContainer(100, 25, 0)}>
                    <TextStatic
                      text="CUSTOMISE"
                      styleText={Styles.btnTitle}
                    />
                  </View>
                </TouchableOpacity>
                <View style={Styles.btnContainer(25, 25, 8)}>
                  <Image
                    source={Images.icBagBlack}
                    style={StylesGlobal.sizeImg(8, 10.5)}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Customize;

Customize.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func
  })
};
