import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';

const styles = StyleSheet.create({
  buttonStyle: {
    height: moderateScale(45),
    backgroundColor: colors.BLACK,
    width: '90%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: scale(14),
    color: colors.WHITE,
  },
  disabledButton: {
    height: moderateScale(45),
    backgroundColor: colors.GREY,
    width: '90%',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScaleVertical(30),
  },
  errorText: {
    color: colors.RED,
  },
});
export default styles;
