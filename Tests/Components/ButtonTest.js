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
  function onPress() {
    window.alert('Terpanggil');
  }

  const tree = renderer.create(
    <Button
      title="Ini Button Title"
      sourceBtnImage={Images.icSearch}
      onPress={onPress}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('Button Component', () => {
  it('Will renders if title props is set', () => {
    const testRenderer = renderer.create(<Button title="Example Title" />);
    const testInstance = testRenderer.root;
    expect(Object.keys(testInstance.props)).toEqual(['title']); // get props
    expect(testInstance.props.title).toBe('Example Title'); // get value from props
  });

  it('Will renders if title and onPress is set', () => {
    function onPress() {
      window.alert('Button Clicked');
    }

    const testRenderer = renderer.create(
      <Button
        title="Title"
        onPress={onPress}
      />
    );

    const testInstance = testRenderer.root;
    const propsValue = Object.values(testInstance.props);

    expect(propsValue[0]).toEqual('Title');
    expect(propsValue[1] === onPress).toBeTruthy();
    expect(Object.keys(testInstance.props)).toEqual(['title', 'onPress']);
  });

  it('Will renders if title, onPress, and icon button is set', () => {
    function onPress() {
      window.alert('Button Clicked');
    }

    const testRenderer = renderer.create(
      <Button
        title="Title Button"
        onPress={onPress}
        sourceBtnImage={Images.icBack}
      />
    );

    const testInstance = testRenderer.root;
    const propsValue = Object.values(testInstance.props);

    // check values from props
    expect(propsValue[0]).toEqual('Title Button');
    expect(propsValue[1] === onPress).toBeTruthy();
    expect(propsValue[2]).toEqual({ testUri: '../../../app/Assets/Images/ic_back.png' });
    // check props
    expect(Object.keys(testInstance.props)).toEqual(['title', 'onPress', 'sourceBtnImage']);
    // check validation prop types
    expect(typeof testInstance.props.title).toBe('string');
    expect(typeof testInstance.props.onPress).toBe('function');
    expect(typeof testInstance.props.sourceBtnImage).toBe('object');
  });
});
