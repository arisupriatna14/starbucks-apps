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

const Button = ({
  styleButton,
  onPress,
  styleTitle,
  title,
  sourceBtnImage,
  styleBtnImage
}) => (
  <TouchableOpacity
    style={styleButton}
    onPress={onPress}
  >
    <Text style={styleTitle}>{title}</Text>
    <Image
      source={sourceBtnImage}
      style={styleBtnImage}
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
