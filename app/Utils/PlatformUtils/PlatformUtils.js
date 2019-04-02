import { Dimensions, Platform } from 'react-native';

const {
  width: deviceWidth,
  height: deviceHeight
} = Dimensions.get('window');

const isIOS = () => Platform.OS === 'ios';
const isAndroid = () => Platform.OS === 'android';

const isIphoneX = () => {
  let ratio = deviceHeight / deviceWidth
  if (deviceWidth > deviceHeight) {
    ratio = deviceWidth / deviceHeight
  }
  return (isIOS() && ratio >= 2.0)
};

export {
  isIOS,
  isIphoneX,
  isAndroid,
  deviceWidth,
  deviceHeight
};
