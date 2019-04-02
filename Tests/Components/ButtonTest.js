import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../../app/Components/Button/Button.components';
import { Images } from '../../app/Themes/Images';

test('Button component renders correctly if title props no set', () => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button component renders correctly if title props is set', () => {
  const tree = renderer.create(<Button title="Ini Title" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button component renders correctly if title and image props set', () => {
  const tree = renderer.create(<Button title="Button Title" sourceBtnImage={Images.icSearch} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('Button component renders correctly if title, images, and onPress is set', () => {
  const tree = renderer.create(
    <Button
      title="Ini Button Title"
      sourceBtnImage={Images.icSearch}
      onPress={() => window.alert('Terpanggil')}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
})