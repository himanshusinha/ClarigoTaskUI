import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {moderateScale, scale} from '../styles/responsiveSize';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  imageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  imageHomeStyle: {
    width: moderateScale(16),
    height: moderateScale(16),
  },
  titleStyle: {
    color: colors.BLACK,
    fontSize: scale(16),
    alignSelf: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
  },
  menuStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginHorizontal: moderateScale(30),
  },
  headerLeftStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
