import { Platform } from 'react-native';

import { Colors } from '../../Themes/Colors';
import { deviceWidth, isIphoneX, deviceHeight } from '../../Utils/PlatformUtils/PlatformUtils';
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
        height: isIphoneX() ? 80 : 75
      },
      android: {
        height: 60
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
        top: 0
      }
    }),
    left: 5
  },
  cardContainer: {
    width: deviceWidth - 32,
    height: deviceHeight - 200,
    backgroundColor: Colors.MINE_SHAFT,
    borderRadius: 7.5,
    shadowColor: Colors.SCORPION,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4
  },
  sizeImage: {
    // width: deviceHeight > 800 ? deviceWidth - 90 : deviceWidth - 140,
    // height: deviceHeight > 800 ? 390 : 320,
    ...Platform.select({
      android: {
        width: deviceWidth - 110,
        height: 390
      },
      ios: {
        width: deviceWidth - 140,
        height: 320
      }
    }),
    bottom: 50
  },
  textTitle: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: '600'
  },
  textDesc: {
    color: Colors.WHITE
  },
  textPrice: {
    color: Colors.SALEM,
    fontSize: 24
  },
  rowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnTitle: {
    color: Colors.BLACK,
    fontSize: 12,
    fontWeight: '600'
  },
  btnContainer: (width, height, horizontal) => ({
    ...StylesGlobal.viewCenter,
    width,
    height,
    marginHorizontal: horizontal,
    borderRadius: 11.5,
    marginTop: 8,
    backgroundColor: Colors.SAFFRON
  })
};

export { Styles };
