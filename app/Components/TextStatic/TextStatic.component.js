import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

const TextStatic = (props) => (
  <Text style={props.styleText}>
    {props.text}
  </Text>
);

export default TextStatic;

TextStatic.propTypes = {
  styleText: PropTypes.instanceOf(Object),
  text: PropTypes.string
};