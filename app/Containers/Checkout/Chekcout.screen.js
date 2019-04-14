import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import get from 'lodash/get';
import { Transition } from 'react-navigation-fluid-transitions';

import { Styles } from './Checkout.style';
import { StylesGlobal } from '../../Themes/StyleGlobal';
import { Images } from '../../Themes/Images';

class Chekcout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigation } = this.props;
    const images = get(navigation, 'state.params.image', '');
    const shared = get(navigation, 'state.params.shared', '');

    return (
      <View style={Styles.container}>
        <Transition shared={shared} delay>
          <Image
            source={images}
            style={StylesGlobal.sizeImg(120, 165)}
          />
        </Transition>
        <Transition appear="bottom" delay>
          <Image
            source={Images.coffeeBag}
            style={[StylesGlobal.sizeImg(139.1, 235.6), { position: 'absolute' }]}
          />
        </Transition>
      </View>
    );
  }
}

export default Chekcout;

Chekcout.propTypes = {
  navigation: PropTypes.shape({})
};
