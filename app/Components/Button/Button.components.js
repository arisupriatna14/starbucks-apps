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

Button.propTypes = {
  styleButton: PropTypes.instanceOf(Object),
  onPress: PropTypes.func,
  styleTitle: PropTypes.instanceOf(Object),
  title: PropTypes.string,
  sourceBtnImage: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object
  ]),
  styleBtnImage: PropTypes.instanceOf(Object)
};
