import {StyleSheet} from 'react-native';
import colors from '../../constants/colors';
import {moderateScale} from '../../styles/responsiveSize';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    marginRight: moderateScale(5),
    marginHorizontal: moderateScale(10),
    marginLeft: moderateScale(10),
    marginEnd: moderateScale(20),
  },
  inputStyle: {
    flex: 1,
    height: moderateScale(50),
    borderRadius: moderateScale(30),
    color: colors.GREY,
  },
  imageLockStyle: {
    width: moderateScale(30),
    height: moderateScale(30),
    marginRight: moderateScale(5),
    marginHorizontal: moderateScale(10),
    marginLeft: moderateScale(10),
    marginEnd: moderateScale(10),
  },
});
export default styles;
