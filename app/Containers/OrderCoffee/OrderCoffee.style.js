import { Colors } from "../../Themes/Colors";
import { StylesGlobal } from "../../Themes/StyleGlobal";
import { deviceWidth } from "../../Utils/PlatformUtils/PlatformUtils";

const Styles = {
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK
  },
  mainContainer: {
    ...StylesGlobal.viewCenter,
    ...StylesGlobal.flex(4)
  },
  imgSize: {
    ...StylesGlobal.sizeImg(deviceWidth - 140, 320)
  },
  btnContainer: {
    ...StylesGlobal.sizeLayout(deviceWidth, 50),
    backgroundColor: Colors.SAFFRON,
    justifyContent: 'center',
    ...StylesGlobal.marginBottom(33),
    ...StylesGlobal.viewCenter
  },
  textTitle: {
    color: Colors.SAFFRON,
    fontSize: 16
  },
  textInput: {
    color: Colors.WHITE
  },
  btnTitle: {
    fontSize: 16,
    fontWeight: '600'
  },
  viewTextInput: {
    borderWidth: 1,
    borderColor: Colors.WHITE,
    width: deviceWidth - 72,
    borderRadius: 20,
    padding: 10
  }
};

export { Styles };
