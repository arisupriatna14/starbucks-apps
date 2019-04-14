import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const TextStatic = ({ styleText, text }) => (
  <Text style={styleText}>
    {text}
  </Text>
);

export default TextStatic;

TextStatic.propTypes = {
  styleText: PropTypes.instanceOf(Object),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};