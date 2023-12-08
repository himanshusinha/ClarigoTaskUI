import React, {useState, useRef, useEffect} from 'react';
import WrapperContainer from '../../components/Wrapper/WrapperContainer';
import Header from '../../components/Header/Header';
import {
  Dimensions,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
  TextInput,
  ScrollView,
  StatusBar,
} from 'react-native';
import {productData, similarProducts} from '../../constants/list';
import colors from '../../constants/colors';
import {
  moderateScale,
  moderateScaleVertical,
} from '../../styles/responsiveSize';
import styles from './styles';
import AppButton from '../../components/Button/AppButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const {height, width} = Dimensions.get('window');

const ProductDetailsScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const autoplayInterval = 3000;
  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % data.length;

      flatListRef.current.scrollToIndex({animated: true, index: nextIndex});
      setCurrentIndex(nextIndex);
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentIndex, data]);
  const [data, setData] = useState(productData);
  const navigation = useNavigation();
  return (
    <WrapperContainer>
      <StatusBar translucent backgroundColor={colors.WHITE} />

      <Header
        onPressOut={() => navigation.goBack()}
        leftImage={require('../../assets/images/back.png')}
        title={'Details'}
        rightImage={require('../../assets/images/upload.png')}
      />
      <ScrollView
        contentContainerStyle={{paddingBottom: moderateScale(20)}}
        showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: height / 3.5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            ref={flatListRef}
            data={data}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={e => {
              const x = e.nativeEvent.contentOffset.x;
              setCurrentIndex(Math.round(x / width));
            }}
            horizontal
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    width: width,
                    height: height / 3,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.LIGHT_GREEN,
                  }}>
                  <TouchableOpacity
                    disabled={true}
                    style={{
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bottom: moderateScaleVertical(20),
                    }}>
                    <Image
                      resizeMode="cover"
                      style={{
                        width: '40%',
                        height: '60%',
                      }}
                      source={item.image}
                    />
                  </TouchableOpacity>
                </View>
              );
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScaleVertical(10),
          }}>
          {data.map((item, index) => {
            return (
              <View
                key={item.id}
                style={{
                  width: currentIndex == index ? 10 : 8,
                  height: currentIndex == index ? 10 : 8,
                  borderRadius: currentIndex == index ? 5 : 4,
                  backgroundColor:
                    currentIndex == index ? colors.GREEN : colors.GREY,
                  marginLeft: 10,
                }}
              />
            );
          })}
        </View>
        <View style={styles.quantityContainer}>
          <View style={styles.innerContainer}>
            <View>
              <Text style={styles.titleProduct}>Bush's Baked Beans</Text>
              <Text style={styles.subTitleProduct}>Product Weight: 28 oz</Text>
            </View>
            <View style={styles.likesContainer}>
              <Image
                resizeMode="contain"
                source={require('../../assets/images/heart.png')}
                style={styles.imageStyle}
              />
              <Text style={styles.subTitleLikes}>1.2 Likes</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.qtyContainer}>
            <TouchableOpacity>
              <Text style={styles.titleDecrement}>-</Text>
            </TouchableOpacity>
            <TextInput
              placeholderTextColor={colors.GREY}
              style={styles.inputQty}
            />
            <TouchableOpacity>
              <Text style={styles.titleIncrement}>+</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.titlePrice}>$ 30.00</Text>
        </View>
        <View style={styles.producDetailContainer}>
          <Text style={styles.titleProductDetail}>Product Detail</Text>
          <Text style={styles.subTitleProductDetail}>
            Our Recipe Starts Navy Beans With A Rich Source of Tasty Malasses,
            Blended With Brown Sugar, Park And Our Own Blend Of Spices
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginTop: moderateScale(20),
            borderBottomWidth: 0.3,
            borderBottomColor: colors.GREY,
            paddingBottom: moderateScale(15),
          }}>
          <Text style={styles.titleProductDetail}>Seller Detail</Text>
          <View
            style={{
              marginTop: moderateScaleVertical(20),
              flexDirection: 'row',
            }}>
            <Image
              source={require('../../assets/images/profile.png')}
              style={{
                width: moderateScale(80),
                height: moderateScale(80),
                borderRadius: moderateScale(40),
              }}
            />

            <View
              style={{
                marginHorizontal: moderateScale(20),
                justifyContent: 'center',
              }}>
              <Text style={styles.titleProfile}>Alex hales</Text>
              <Text style={styles.subTitleProfile}>
                Lorem Ipsun Dummy Dolor
              </Text>
              <View style={{flexDirection: 'row'}}>
                <AppButton
                  title={'Send a Message'}
                  titleStyle={{
                    color: colors.WHITE,
                    fontWeight: 'bold',
                    fontSize: 12,
                  }}
                  style={{
                    backgroundColor: colors.GREY,
                    marginTop: moderateScaleVertical(10),
                    borderRadius: 40,
                    width: '52%',
                    height: 30,
                  }}
                />
                <AppButton
                  title={'Follow'}
                  titleStyle={{
                    color: colors.WHITE,
                    fontWeight: 'bold',
                    fontSize: 12,
                    marginHorizontal: moderateScale(10),
                  }}
                  style={{
                    backgroundColor: colors.GREEN,
                    marginTop: moderateScaleVertical(10),
                    borderRadius: 40,
                    width: '30%',
                    height: 30,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: moderateScale(20),
            borderBottomWidth: 0.3,
            borderBottomColor: colors.GREY,
            marginHorizontal: moderateScale(20),
            paddingBottom: moderateScale(15),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleDate}>Expiration Date</Text>
            <Text style={styles.subTitleDate}>30/05/2023</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: moderateScale(20),
            borderBottomWidth: 0.3,
            borderBottomColor: colors.GREY,
            marginHorizontal: moderateScale(20),
            paddingBottom: moderateScale(15),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleDate}>Reviews</Text>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  bottom: moderateScale(5),
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                  left: moderateScale(3),
                }}>
                <Image
                  style={{
                    width: moderateScale(12),
                    height: moderateScale(12),
                    marginHorizontal: 3,
                  }}
                  source={require('../../assets/images/rating.png')}
                />
                <Image
                  style={{
                    width: moderateScale(12),
                    height: moderateScale(12),
                    marginHorizontal: 3,
                  }}
                  source={require('../../assets/images/rating.png')}
                />
                <Image
                  style={{
                    width: moderateScale(12),
                    height: moderateScale(12),
                    marginHorizontal: 3,
                  }}
                  source={require('../../assets/images/rating.png')}
                />
                <Image
                  style={{
                    width: moderateScale(12),
                    height: moderateScale(12),
                    marginHorizontal: 3,
                  }}
                  source={require('../../assets/images/rating.png')}
                />
                <Image
                  style={{
                    width: moderateScale(12),
                    height: moderateScale(12),
                    marginHorizontal: 3,
                  }}
                  source={require('../../assets/images/rating.png')}
                />
              </View>
              <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
                <Text style={styles.subTitleReview}>20 Customer Ratings</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            marginTop: moderateScale(20),
            borderBottomWidth: 0.3,
            borderBottomColor: colors.GREY,
            marginHorizontal: moderateScale(20),
            paddingBottom: moderateScale(15),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleUPC}>UPC Code</Text>
            <Text style={styles.subTitleUPC}>0 36000 29145 2</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: moderateScale(20),
            borderBottomWidth: 0.3,
            borderBottomColor: colors.GREY,
            marginHorizontal: moderateScale(20),
            paddingBottom: moderateScale(15),
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.titleShipping}>Shipping Address</Text>
            <View>
              <Text style={styles.subTitleShipping}>
                Dandridgr, TN 37725, United States
              </Text>
              <Text style={styles.subTitleShipping2}>
                Time to Deilver: 24-48 Hours
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: moderateScaleVertical(20),
          }}>
          <AppButton
            title={'Add to Cart'}
            titleStyle={{color: colors.WHITE, fontWeight: 'bold'}}
            style={{
              backgroundColor: colors.GREEN,
              marginTop: moderateScaleVertical(10),
              borderRadius: 15,
              width: '40%',
              marginHorizontal: 20,
              height: 45,
            }}
          />
        </View>
        <View style={{marginTop: moderateScale(20), marginHorizontal: 20}}>
          <Text style={styles.titleSimilar}>Similar Products</Text>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={similarProducts}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{
                  marginHorizontal: 20,
                  width: moderateScale(200),
                }}>
                <View
                  style={{
                    height: moderateScale(220),
                    borderWidth: 1.5,
                    borderColor: colors.GREEN,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: moderateScale(20),
                    marginTop: moderateScale(20),
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Image
                      style={{
                        width: moderateScale(120),
                        height: moderateScale(120),
                        left: moderateScale(10),
                        bottom: moderateScale(20),
                      }}
                      source={item.image}
                    />
                    <TouchableOpacity>
                      <Image
                        resizeMode="contain"
                        style={{
                          width: moderateScale(20),
                          height: moderateScale(20),
                          bottom: moderateScale(40),
                          left: moderateScale(15),
                        }}
                        source={item.heart}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    bottom: moderateScale(50),
                    marginHorizontal: 10,
                  }}>
                  <View>
                    <Text style={styles.titleProducts}>{item.title}</Text>
                    <Text style={styles.subTitleProducts}>{item.subTitle}</Text>
                  </View>
                  <View>
                    <Text style={styles.titleProductPrice}>{item.price}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
    </WrapperContainer>
  );
};

export default ProductDetailsScreen;
