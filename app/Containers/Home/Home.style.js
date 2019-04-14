import { deviceWidth } from '../../Utils/PlatformUtils/PlatformUtils';
import { Colors } from '../../Themes/Colors';
import { StylesGlobal } from '../../Themes/StyleGlobal';

const Styles = {
  container: {
    ...StylesGlobal.flex(1),
    backgroundColor: Colors.BLACK
  },
  viewHeader: {
    ...StylesGlobal.sizeLayout(deviceWidth, 130),
    ...StylesGlobal.viewCenter,
    backgroundColor: Colors.SALEM
  },
  headerTitle: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
    ...StylesGlobal.top(16)
  },
  logoHeader: {
    ...StylesGlobal.sizeImg(50, 50),
    ...StylesGlobal.top(10)
  },
  containerCard: {
    ...StylesGlobal.sizeLayout((deviceWidth - 32), 140),
    ...StylesGlobal.marginHorizontal(16),
    ...StylesGlobal.marginVertical(24),
    ...StylesGlobal.flexDirection('row'),
    backgroundColor: Colors.MINE_SHAFT,
    borderRadius: 7.5,
    shadowColor: Colors.SCORPION,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4
  },
  textItemName: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold'
  },
  textItemPrice: {
    color: Colors.SALEM,
    fontSize: 14
  },
  viewDescription: {
    ...StylesGlobal.marginTop(16),
    ...StylesGlobal.flex(1),
    ...StylesGlobal.marginHorizontal(16)
  },
  buttonCustomize: {
    backgroundColor: Colors.SAFFRON,
    borderRadius: 11.5,
    ...StylesGlobal.sizeLayout(100, 25),
    ...StylesGlobal.marginTop(8),
    ...StylesGlobal.viewCenter
  },
  buttonBag: {
    backgroundColor: Colors.SAFFRON,
    borderRadius: 11.5,
    ...StylesGlobal.sizeLayout(25, 25),
    ...StylesGlobal.marginTop(8),
    ...StylesGlobal.marginHorizontal(8),
    ...StylesGlobal.viewCenter
  },
  btnTitle: {
    color: Colors.BLACK,
    fontSize: 12,
    fontWeight: '600'
  }
};

export { Styles };