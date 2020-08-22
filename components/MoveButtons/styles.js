import { StyleSheet } from 'react-360';

export default StyleSheet.create({
  wrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    paddingLeft: 5,
    paddingRight: 5,
    paddingBottom: 5,
    backgroundColor: 'rgba(0, 183, 255, 0.2)',
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
  },
  flex1: {
    flex: 1,
  },
  text: {
    color: 'black',
  },
});
