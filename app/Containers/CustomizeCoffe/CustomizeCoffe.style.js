import { Platform } from 'react-native';

import { Colors } from '../../Themes/Colors';
import { isIphoneX, deviceWidth } from '../../Utils/PlatformUtils/PlatformUtils';
import { StylesGlobal } from '../../Themes/StyleGlobal';

const Styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK
  },
  containerHeader: {
    width: deviceWidth,
    ...Platform.select({
      ios: {
        height: isIphoneX() ? 80 : 75,
      },
      android: {
        height: 60,
      }
    }),
    backgroundColor: Colors.SALEM,
    justifyContent: 'center'
  },
  icBackSize: {
    width: 30,
    height: 30,
    ...Platform.select({
      ios: {
        top: isIphoneX() ? 15 : 5
      },
      android: {
        top: 0,
      }
    }),
    left: 5
  },
  textNameCoffe: {
    color: Colors.WHITE,
    fontSize: 14,
    fontWeight: 'bold'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.MINE_SHAFT,
    borderRadius: 16
  },
  rowCard: {
    flexDirection: 'row',
    ...StylesGlobal.marginVertical(16)
  },
  textSizeCoffe: {
    color: Colors.WHITE
  },
  textMilk: {
    color: Colors.WHITE,
    fontSize: 12
  },
  card: isSelected => ({
    ...StylesGlobal.sizeLayout(100, 100),
    ...StylesGlobal.viewCenter,
    borderRadius: 5,
    backgroundColor: isSelected ? Colors.SALEM : Colors.TUNDORA
  }),
  cardMilk: isSelected => ({
    ...StylesGlobal.viewCenter,
    borderRadius: 5,
    padding: 8,
    backgroundColor: isSelected ? Colors.SALEM : Colors.TUNDORA
  }),
  viewBtnTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16
  },
  btnTitle: {
    fontWeight: 'bold'
  },
  btnContainer: {
    ...StylesGlobal.sizeLayout(deviceWidth, 50),
    ...StylesGlobal.marginTop(25),
    backgroundColor: Colors.SAFFRON,
    justifyContent: 'center'
  },
  viewSliderTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  trackSlider: {
    height: 10,
    borderRadius: 20
  },
  sliderContainer: {
    ...StylesGlobal.margin(20),
    alignItems: 'stretch',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row'
  }
};

export { Styles };
