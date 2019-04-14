import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';
import get from 'lodash/get';
import { Transition } from 'react-navigation-fluid-transitions';
import Slider from 'react-native-slider';

import { Styles } from './CustomizeCoffe.style';
import { Images } from '../../Themes/Images';
import { StylesGlobal } from '../../Themes/StyleGlobal';
import TextStatic from '../../Components/TextStatic/TextStatic.component';
import { keyExtractor } from '../../Utils/HelperUtils/HelperUtils';
import { Colors } from '../../Themes/Colors';

class CustomizeCoffe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectSize: null,
      selectMilk: null,
      listMilk: [{
        name: 'Nonfat/Skim',
        price: 1.3
      }, {
        name: 'Heavy Cream',
        price: 1.5,
      }, {
        name: 'Soy',
        price: 2.0
      }, {
        name: 'Coconut Milk',
        price: 2.3
      }, {
        name: 'Heavy Cream',
        price: 2.5
      }, {
        name: 'Soy',
        price: 3.1
      }],
      totalPriceCoffee: get(props, 'navigation.state.params.item.price', 0)
    };
  }

  goBack = () => {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onPressSelectSize = size => () => {
    this.setState({ selectSize: size })
  }

  onPressSelectMilk = type => () => {
    const { listMilk } = this.state;
    this.setState({ selectMilk: type }, () => {
      this.totalPrice(listMilk[type].price)
    });
  }

  onPressOrder = (image, shared) => () => {
    const { navigation } = this.props;
    navigation.navigate('OrderCoffee', { image, shared });
  }

  totalPrice = (priceMilk) => {
    const { totalPriceCoffee, selectSize } = this.state;
    this.setState({ 
      totalPriceCoffee: totalPriceCoffee + priceMilk + selectSize
    })
  };

  renderListMilk = ({ item, index }) => {
    const { selectMilk } = this.state;
    return (
      <TouchableOpacity onPress={this.onPressSelectMilk(index)}>
        <View style={[Styles.cardMilk(selectMilk === index), StylesGlobal.marginHorizontal(4)]}>
          <TextStatic
            text={item.name}
            styleText={Styles.textMilk}
          />
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    const { selectSize, listMilk, totalPriceCoffee } = this.state;
    const images = get(navigation, 'state.params.item.image', '');
    const shared = get(navigation, 'state.params.item.shared', '');
    const nameCoffee = get(navigation, 'state.params.item.name', '');

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
        <View style={[StylesGlobal.viewCenter, StylesGlobal.marginTop(60)]}>
          <Transition shared={shared}>
            <Image
              source={images}
              style={StylesGlobal.sizeImg(120, 165)}
            />
          </Transition>
          <View style={StylesGlobal.marginVertical(16)}>
            <TextStatic
              text={nameCoffee}
              styleText={Styles.textNameCoffe}
            />
          </View>
        </View>
        <View style={Styles.mainContainer}>
          <View style={StylesGlobal.margin(20)}>
            <TextStatic
              text="Select Size"
              styleText={Styles.textSizeCoffe}
            />
            <View style={[Styles.rowCard, StylesGlobal.viewCenter]}>
              <TouchableOpacity onPress={this.onPressSelectSize(1)}>
                <View style={Styles.card(selectSize === 1)}>
                  <TextStatic
                    text="355 ml"
                    styleText={Styles.textSizeCoffe}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onPressSelectSize(2)}>
                <View
                  style={[
                    Styles.card(selectSize === 2),
                    StylesGlobal.marginHorizontal(16)
                  ]}
                >
                  <TextStatic
                    text="475 ml"
                    styleText={Styles.textSizeCoffe}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.onPressSelectSize(3)}>
                <View style={Styles.card(selectSize === 3)}>
                  <TextStatic
                    text="595 ml"
                    styleText={Styles.textSizeCoffe}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[StylesGlobal.marginHorizontal(20), StylesGlobal.marginBottom(16)]}>
            <TextStatic
              text="Select Milk"
              styleText={Styles.textSizeCoffe}
            />
          </View>
          <View style={Styles.row}>
            <FlatList
              data={listMilk}
              renderItem={this.renderListMilk}
              keyExtractor={keyExtractor}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingStart: 16 }}
            />
          </View>
          <View style={Styles.sliderContainer}>
            <Slider
              value={50}
              minimumValue={0}
              maximumValue={100}
              minimumTrackTintColor={Colors.SALEM}
              maximumTrackTintColor={Colors.SALEM}
              thumbTintColor={Colors.WHITE}
              trackStyle={Styles.trackSlider}
            />
            <View style={Styles.viewSliderTitle}>
              <TextStatic
                text="No Foam"
                styleText={Styles.textSizeCoffe}
              />
              <TextStatic
                text="Light Foam"
                styleText={Styles.textSizeCoffe}
              />
              <TextStatic
                text="Extra Foam"
                styleText={Styles.textSizeCoffe}
              />
            </View>
          </View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={this.onPressOrder(images, shared)}
          >
            <View style={Styles.btnContainer}>
              <View style={Styles.viewBtnTitle}>
                <TextStatic
                  text={`$${totalPriceCoffee}`}
                  styleText={Styles.btnTitle}
                />
                <TextStatic
                  text="ADD TO CART"
                  styleText={Styles.btnTitle}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default CustomizeCoffe;

CustomizeCoffe.propTypes = {
  navigation: PropTypes.shape({
    goBack: PropTypes.func
  })
};