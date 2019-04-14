/**
 * StylesGlobal
 * 
 * @param {number} flex - value is 1 - 6
 * @param {string} flexDirection - column, column-reverse, row, row-reverse
 * @param {number} marginHorizontal
 * @param {number} marginVertical
 * @param {number} marginTop
 * @param {number} marginBottom
 * @param {number} marginLeft
 * @param {number} marginRight
 * @param {number} top
 * @param {number} bottom
 * @param {number} left
 * @param {number} right
 * @param {number} sizeImg - width and height
 * @param {number} sizeLayout - width and height
 * @param {number and string} container - flex and backgroundColor
 * @param {object} viewCenter
 */

const StylesGlobal = {
  flex: value => ({
    flex: value
  }),
  flexDirection: value => ({
    flexDirection: value
  }),
  marginHorizontal: value => ({
    marginHorizontal: value
  }),
  marginVertical: value => ({
    marginVertical: value
  }),
  marginTop: value => ({
    marginTop: value
  }),
  marginBottom: value => ({
    marginBottom: value
  }),
  marginLeft: value => ({
    marginLeft: value
  }),
  marginRight: value => ({
    marginRight: value
  }),
  margin: value => ({
    margin: value
  }),
  top: value => ({
    top: value
  }),
  bottom: value => ({
    bottom: value
  }),
  left: value => ({
    left: value
  }),
  right: value => ({
    right: value
  }),
  sizeImg: (width, height) => ({
    width,
    height
  }),
  sizeLayout: (width, height) => ({
    width,
    height
  }),
  viewCenter: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { StylesGlobal };
