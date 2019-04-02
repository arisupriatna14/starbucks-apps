import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TextStatic from '../../app/Components/TextStatic/TextStatic.component';

test('TextStatic component renders correctly if text prop no set', () => {
  const tree = renderer.create(<TextStatic />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextStatic component renders correctly if text prop is set', () => {
  const tree = renderer.create(<TextStatic text="Hello world" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextStatic component renders correctly if text and styleText is set', () => {
  const tree = renderer.create(
    <TextStatic
      text="Hello world"
      styleText={{
        color: '#fff'
      }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
