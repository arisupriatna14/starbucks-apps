import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';
import { Transition } from 'react-navigation-fluid-transitions';

import { Colors } from '../../Themes/Colors';
import { StylesGlobal } from '../../Themes/StyleGlobal';
import {
  deviceWidth,
  deviceHeight,
  isIphoneX
} from '../../Utils/PlatformUtils/PlatformUtils';
import { Images } from '../../Themes/Images';

export class Customize extends Component {
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
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.BLACK
        }}
      >
        <View
          style={{
            width: deviceWidth,
            ...Platform.select({
              ios: {
                height: isIphoneX() ? 80 : 75,
              },
              android: {
                height: 60,
              }
            }),
            backgroundColor: Colors.SALEM,
            justifyContent: 'center'
          }}
        >
          <TouchableOpacity onPress={this.goBack}>
            <Image
              source={Images.icBack}
              style={{
                width: 30,
                height: 30,
                ...Platform.select({
                  ios: {
                    top: isIphoneX() ? 15 : 5
                  },
                  android: {
                    top: 0,
                  }
                }),
                left: 5
              }}
            />
          </TouchableOpacity>
        </View>
        <View style={[StylesGlobal.flex(1), StylesGlobal.viewCenter]}>
          <View
            style={{
              width: deviceWidth - 32,
              height: deviceHeight - 200,
              backgroundColor: Colors.MINE_SHAFT,
              borderRadius: 7.5,
              shadowColor: Colors.SCORPION,
              shadowRadius: 5,
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.4,
            }}
          >
            <View style={StylesGlobal.marginHorizontal(24)}>
              <TouchableOpacity onPress={this.goBack}>
                <Transition shared={shared} appear="vertical">
                  <Image
                    source={image}
                    style={{
                      // width: deviceHeight > 800 ? deviceWidth - 90 : deviceWidth - 140,
                      // height: deviceHeight > 800 ? 390 : 320,
                      ...Platform.select({
                        android: {
                          width: deviceWidth - 110,
                          height: 390
                        },
                        ios: {
                          width: deviceWidth - 140,
                          height: 320,
                        }
                      }),
                      bottom: 50
                    }}
                  />
                </Transition>
              </TouchableOpacity>
              <Transition appear="left">
                <Text
                  style={{
                    color: Colors.WHITE,
                    fontSize: 18,
                    fontWeight: '600'
                  }}
                >
                  Chocolate Frappuccino
                </Text>
              </Transition>
              <Transition appear="right">
                <View style={StylesGlobal.marginVertical(16)}>
                  <Text
                    style={{
                      color: Colors.WHITE
                    }}
                  >
                    Milk, Syrup, Ice, Green Sauce,
                    Special Toppings, Whipped Cream,
                    Green Tea Leaves
                  </Text>
                </View>
              </Transition>
              <Transition appear="right">
                <Text
                  style={{
                    color: Colors.SALEM,
                    fontSize: 24,
                  }}
                >
                  $4.50
                </Text>
              </Transition>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View
                  style={{
                    backgroundColor: Colors.SAFFRON,
                    borderRadius: 11.5,
                    width: 100,
                    height: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 8
                  }}
                >
                  <Text
                    style={{
                      color: Colors.BLACK,
                      fontSize: 12,
                      fontWeight: '600'
                    }}
                  >
                    CUSTOMISE
                  </Text>
                </View>
                <View
                  style={{
                    backgroundColor: Colors.SAFFRON,
                    borderRadius: 11.5,
                    width: 25,
                    height: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: 8,
                    marginHorizontal: 8
                  }}
                >
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
