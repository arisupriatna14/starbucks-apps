import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

import { Images } from '../../Themes/Images';
import { deviceWidth } from '../../Utils/PlatformUtils/PlatformUtils';
import { Colors } from '../../Themes/Colors';
import { keyExtractor } from '../../Utils/HelperUtils/HelperUtils';
import { StylesGlobal } from '../../Themes/StyleGlobal';
import TextStatic from '../../Components/TextStatic/TextStatic.component';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: 'Chocolate Frappuccino',
        price: '$4.50',
        image: Images.icCoffeThree,
        shared: 'chocolateFrappuccino'
      }, {
        name: 'Tea Frappuccino',
        price: '$4.50',
        image: Images.icCoffeOne,
        shared: 'teaFrappuccino'
      }, {
        name: 'Strawberry Frappuccino',
        price: '$4.50',
        image: Images.icCoffeTwo,
        shared: 'strawberryFrappuccino'
      }]
    };
  }

  navigateToScreen = (image, shared) => () => {
    const { navigation } = this.props;
    navigation.navigate('Customize', { image, shared })
  }

  renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          width: deviceWidth - 32,
          height: 140,
          marginHorizontal: 16,
          marginVertical: 24,
          backgroundColor: Colors.MINE_SHAFT,
          borderRadius: 7.5,
          flexDirection: 'row',
          shadowColor: Colors.SCORPION,
          shadowRadius: 5,
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.4,
        }}
      >
        <View style={{ marginHorizontal: 16 }}>
          <TouchableOpacity onPress={this.navigateToScreen(item.image, item.shared)}>
            <Transition appear="left" delay shared={item.shared}>
              <Image
                source={item.image}
                style={{
                  width: 120,
                  height: 165,
                  bottom: 30
                }}
              />
            </Transition>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 16, flex: 1, marginHorizontal: 16 }}>
          <Transition appear="right">
            <TextStatic
              text={item.name}
              styleText={{
                color: Colors.WHITE,
                fontSize: 16,
                fontWeight: 'bold'
              }}
            />
          </Transition>
          <View style={StylesGlobal.marginTop(24)}>
            <Transition appear="right">
              <TextStatic
                text={item.price}
                styleText={{
                  color: Colors.SALEM,
                  fontSize: 14,
                }}
              />
            </Transition>
          </View>
          <View style={StylesGlobal.flexDirection('row')}>
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
              <TextStatic
                text="CUSTOMISE"
                styleText={{
                  color: Colors.BLACK,
                  fontSize: 12,
                  fontWeight: '600'
                }}
              />
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
    )
  }

  render() {
    const { data } = this.state;
    return (
      <View style={[StylesGlobal.flex(1), { backgroundColor: Colors.BLACK }]}>
        <View
          style={[
            StylesGlobal.sizeLayout(deviceWidth, 130),
            StylesGlobal.viewCenter,
            { backgroundColor: Colors.SALEM }
          ]}
        >
          <Image
            source={Images.logoStarbucks}
            style={[StylesGlobal.sizeImg(50, 50), StylesGlobal.top(10)]}
          />
          <TextStatic
            text="STARBUCKS"
            styleText={{ color: Colors.WHITE, fontSize: 18, fontWeight: 'bold', top: 16 }}
          />
        </View>
        <FlatList
          data={data}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          contentContainerStyle={StylesGlobal.top(24)}
        />
      </View>
    )
  }
}

export default Home;
