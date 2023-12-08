import {StyleSheet} from 'react-native';
import {moderateScale} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(20),
    alignItems: 'center',
    height: moderateScale(60),
  },
  titleText: {
    fontSize: moderateScale(18),
    color: colors.GREEN,
    fontWeight: '600',
  },
  leftButtonImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  rightButtonImage: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});
export default styles;
