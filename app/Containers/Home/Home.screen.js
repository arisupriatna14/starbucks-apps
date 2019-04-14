import React, { Component } from 'react';
import {
  View,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import { Transition } from 'react-navigation-fluid-transitions';

import { Images } from '../../Themes/Images';
import { keyExtractor } from '../../Utils/HelperUtils/HelperUtils';
import { StylesGlobal } from '../../Themes/StyleGlobal';
import TextStatic from '../../Components/TextStatic/TextStatic.component';
import { Styles } from './Home.style';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [{
        name: 'Chocolate Frappuccino',
        price: 4.50,
        image: Images.icCoffeThree,
        shared: 'chocolateFrappuccino'
      }, {
        name: 'Tea Frappuccino',
        price: 5.50,
        image: Images.icCoffeOne,
        shared: 'teaFrappuccino'
      }, {
        name: 'Strawberry Frappuccino',
        price: 6.50,
        image: Images.icCoffeTwo,
        shared: 'strawberryFrappuccino'
      }]
    };
  }

  navigateToScreen = (item) => () => {
    const { navigation } = this.props;
    navigation.navigate('Customize', { item })
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={Styles.containerCard} key={index}>
        <View style={StylesGlobal.marginHorizontal(16)}>
          <TouchableOpacity
            onPress={this.navigateToScreen(item)}
          >
            <Transition appear="left" delay shared={item.shared}>
              <Image
                source={item.image}
                style={[
                  StylesGlobal.sizeImg(120, 165),
                  StylesGlobal.bottom(30)
                ]}
              />
            </Transition>
          </TouchableOpacity>
        </View>
        <View style={Styles.viewDescription}>
          <Transition appear="right">
            <TextStatic
              text={item.name}
              styleText={Styles.textItemName}
            />
          </Transition>
          <View style={StylesGlobal.marginTop(24)}>
            <Transition appear="right">
              <TextStatic
                text={`$${item.price}`}
                styleText={Styles.textItemPrice}
              />
            </Transition>
          </View>
          <View style={StylesGlobal.flexDirection('row')}>
            <View style={Styles.buttonCustomize}>
              <TextStatic
                text="CUSTOMISE"
                styleText={Styles.btnTitle}
              />
            </View>
            <View style={Styles.buttonBag}>
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
      <View style={Styles.container}>
        <View style={Styles.viewHeader}>
          <Image
            source={Images.logoStarbucks}
            style={Styles.logoHeader}
          />
          <TextStatic
            text="STARBUCKS"
            styleText={Styles.headerTitle}
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

Home.propTypes = {};
