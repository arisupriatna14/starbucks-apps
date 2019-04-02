/**
 * Button Global
 * @param {object} styleButton
 * @param {function} onPress
 * @param {object} styleTitle
 * @param {string} sourceBtnImage
 * @param {object} styleBtnImage
 */

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

const Button = (props) => (
  <TouchableOpacity
    style={props.styleButton}
    onPress={props.onPress}
  >
    <Text style={props.styleTitle}>{props.title}</Text>
    <Image
      source={props.sourceBtnImage}
      style={props.styleBtnImage}
    />
  </TouchableOpacity>
);

export default Button;

Button.propTypes = {};
