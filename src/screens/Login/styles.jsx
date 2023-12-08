import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.WHITE,
  },
  imgStyle: {
    height: moderateScale(220),
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginTextStyle: {
    fontSize: scale(32),
    color: 'white',
    fontWeight: 'bold',
  },
  mainStyle: {
    paddingHorizontal: moderateScale(24),
    paddingTop: moderateScaleVertical(60),
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateScaleVertical(24),
  },

  bottomView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScaleVertical(140),
    bottom: moderateScale(160),
  },
});

export default styles;
