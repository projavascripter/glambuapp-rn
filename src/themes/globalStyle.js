import { StyleSheet } from 'react-native';
import Colors from './colors';

export default StyleSheet.create({
  pageTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
    color: Colors.bkColor,
    textAlign: 'center',
    alignSelf: 'center',
  },
  fullPageContainer: {
    flex: 1,
    backgroundColor: Colors.bkColor,
    position: 'relative',
  },
  pageContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  wrapper: {
    flexDirection: 'row',
  },
  overlayView: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.bkColor,
  },
});
