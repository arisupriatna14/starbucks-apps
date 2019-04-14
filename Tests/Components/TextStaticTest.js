import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import TextStatic from '../../app/Components/TextStatic/TextStatic.component';
import { Colors } from '../../app/Themes/Colors';

test('TextStatic component renders correctly if text prop no set', () => {
  const tree = renderer.create(<TextStatic />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextStatic component renders correctly if text prop is string', () => {
  const tree = renderer.create(<TextStatic text="Hello world" />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextStatic component renders correctly if text prop is number', () => {
  const tree = renderer.create(<TextStatic text={100} />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('TextStatic component renders correctly if text and styleText is set', () => {
  const tree = renderer.create(
    <TextStatic
      text="Hello world"
      styleText={{
        color: Colors.WHITE
      }}
    />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

describe('TextStatic', () => {
  it('Component will renders correctly if text with prop types is number', () => {
    const testRenderer = renderer.create(<TextStatic text={50} />);
    const testInstance = testRenderer.root.findByType(TextStatic);
    expect(testInstance.props.text).toEqual(50);
    expect(typeof testInstance.props.text).toEqual('number');
  });

  it('Component will renders correctly if text with prop types is string', () => {
    const testRenderer = renderer.create(<TextStatic text="Title Button" />);
    const testInstance = testRenderer.root.findByType(TextStatic);
    const props = Object.keys(testInstance.props);

    expect(props).toEqual(['text']);
    expect(typeof testInstance.props.text).toEqual('string');
    expect(testInstance.props.text).toEqual('Title Button');
  });

  it('Component will renders correctly if text and styles set', () => {
    const testRenderer = renderer.create(
      <TextStatic
        text="Hello world"
        styleText={{
          color: Colors.WHITE
        }}
      />
    );

    const testInstance = testRenderer.root;

    expect(typeof testInstance.props.styleText).toBe('object');
    expect(typeof testInstance.props.text).toBe('string');
    expect(Object.keys(testInstance.props)).toEqual(['text', 'styleText']);
    expect(Object.values(testInstance.props)).toEqual(['Hello world', { color: Colors.WHITE }]);
  });
});
