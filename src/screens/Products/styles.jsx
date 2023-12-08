import {StyleSheet} from 'react-native';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
const styles = StyleSheet.create({
  quantityContainer: {
    marginTop: moderateScale(20),
    paddingHorizontal: moderateScale(20),
  },
  titleProduct: {
    fontSize: scale(18),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
    fontWeight: 'bold',
  },
  subTitleProduct: {
    fontSize: scale(16),
    color: colors.GREY,
    lineHeight: moderateScale(25),
  },
  subTitleLikes: {
    fontSize: scale(12),
    color: colors.GREY,
    lineHeight: moderateScale(25),
    right: moderateScale(2),
  },
  innerContainer: {flexDirection: 'row', justifyContent: 'space-between'},
  likesContainer: {justifyContent: 'flex-end', alignItems: 'center'},
  imageStyle: {width: moderateScale(20), height: moderateScale(20)},
  titleDecrement: {
    fontSize: scale(25),
    color: colors.GREY,
  },
  titleIncrement: {
    fontSize: scale(25),
    color: colors.GREEN,
  },
  titlePrice: {
    fontSize: scale(20),
    color: colors.GREEN,
    top: moderateScale(15),
    fontWeight: '500',
  },
  inputQty: {
    borderRadius: moderateScale(20),
    borderWidth: 1,
    borderColor: colors.GREY,
    height: moderateScale(50),
    width: moderateScale(50),
    marginHorizontal: moderateScale(10),
    justifyContent: 'center',
    alignSelf: 'center',
    textAlign: 'center',
    color: colors.BLACK,
  },
  qtyContainer: {flexDirection: 'row', alignItems: 'center'},
  container: {
    marginTop: moderateScaleVertical(10),
    marginHorizontal: moderateScale(20),
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: moderateScale(15),
    borderBottomWidth: 0.3,
    borderBottomColor: colors.GREY,
  },
  producDetailContainer: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScaleVertical(20),
    paddingBottom: moderateScale(15),
    borderBottomWidth: 0.3,
    borderBottomColor: colors.GREY,
  },
  titleProductDetail: {
    fontSize: scale(18),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
  },
  subTitleProductDetail: {
    fontSize: scale(14),
    color: colors.GREY,
    lineHeight: moderateScale(20),
    letterSpacing: 0.2,
    textAlign: 'justify',
    marginTop: moderateScale(10),
  },
  titleProfile: {
    fontSize: scale(18),
    color: colors.GREEN,
    lineHeight: moderateScale(25),
    fontWeight: '600',
  },
  subTitleProfile: {
    fontSize: scale(16),
    color: colors.GREY,
    lineHeight: moderateScale(25),
  },
  titleDate: {
    fontSize: scale(16),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
  },
  subTitleDate: {
    fontSize: scale(14),
    color: colors.RED,
    lineHeight: moderateScale(25),
  },
  titleReview: {
    fontSize: scale(16),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
    marginTop: moderateScale(10),
  },
  subTitleReview: {
    fontSize: scale(8),
    color: colors.GREY,
    lineHeight: moderateScale(12),
  },
  titleUPC: {
    fontSize: scale(16),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
  },
  subTitleUPC: {
    fontSize: scale(10),
    color: colors.GREY,
    lineHeight: moderateScale(25),
  },
  titleShipping: {
    fontSize: scale(16),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
  },
  subTitleShipping: {
    fontSize: scale(10),
    color: colors.GREY,
    lineHeight: moderateScale(25),
    alignSelf: 'flex-end',
  },
  subTitleShipping2: {
    fontSize: scale(10),
    color: colors.GREY,
    lineHeight: moderateScale(14),
    alignSelf: 'flex-end',
  },
  titleSimilar: {
    fontSize: scale(14),
    color: colors.BLACK,
    lineHeight: moderateScale(25),
  },
  titleProducts: {
    fontSize: scale(12),
    color: colors.BLACK,
  },
  subTitleProducts: {
    fontSize: scale(12),
    color: colors.GREY,
  },
  titleProductPrice: {
    fontSize: scale(14),
    color: colors.GREEN,
    fontWeight: '600',
    marginStart: moderateScale(10),
    top: moderateScale(6),
  },

  columnWrapper: {
    justifyContent: 'space-around',
    marginHorizontal: moderateScale(14),
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: moderateScale(8),
  },
});
export default styles;
