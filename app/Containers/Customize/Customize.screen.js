import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

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

  render() {
    const { navigation } = this.props;
    const shared = navigation.state.params.shared;
    const image = navigation.state.params.image;
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
                  text="Chocolate Frappuccino"
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
                  text="$4.50"
                  styleText={Styles.textPrice}
                />
              </Transition>
              <View style={Styles.rowCenter}>
                <View style={Styles.btnContainer(100, 25, 0)}>
                  <TextStatic
                    text="CUSTOMISE"
                    styleText={Styles.btnTitle}
                  />
                </View>
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
    )
  }
}

export default Customize;
