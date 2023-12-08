import {
  View,
  Image,
  StatusBar,
  Dimensions,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import {categories, listings, similarProducts} from '../../constants/list';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';
const HomeScreen = () => {
  const screenWidth = Dimensions.get('window').width;
  const marginHorizontal = moderateScale(20);

  const originalWidth = 200;
  const originalHeight = 220 / 2 + 430;
  const itemWidth = (screenWidth - 3 * marginHorizontal) / 2;

  const aspectRatio = originalHeight / originalWidth;
  const navigation = useNavigation();
  return (
    <View>
      <StatusBar translucent backgroundColor="transparent" />

      <View>
        <ImageBackground
          resizeMode="cover"
          style={{
            width: '100%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          source={require('../../assets/images/header3.png')}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: '100%',
              marginTop: moderateScale(55),
            }}>
            <Image
              style={{
                width: moderateScale(20),
                height: moderateScale(20),
                alignSelf: 'center',
                marginStart: moderateScale(20),
              }}
              source={require('../../assets/images/Burgerr.png')}
            />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginEnd: moderateScale(40),
              }}>
              <Image
                style={{
                  width: moderateScale(60),
                  height: moderateScale(60),
                }}
                source={require('../../assets/images/donee.png')}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: moderateScale(150),
        }}>
        <View style={{flexDirection: 'row', margin: moderateScale(20)}}>
          <Text style={{fontSize: scale(18), color: colors.DARK_GREY}}>
            Hello
          </Text>
          <Text
            style={{
              fontSize: scale(18),
              color: colors.YELLOW,
              marginHorizontal: moderateScale(10),
            }}>
            Alex Hales
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            bottom: moderateScale(15),
          }}>
          <Text
            style={{
              fontSize: scale(18),
              fontWeight: '500',
              color: colors.DARK_GREY,
            }}>
            Find Good Food For A Healthy Body
          </Text>
        </View>
        <View
          style={{
            marginTop: moderateScale(20),
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            bottom: moderateScale(10),
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1.5,
              width: '82%',
              borderColor: colors.GREEN,
              borderRadius: moderateScale(15),
            }}>
            <Image
              style={{
                marginStart: moderateScale(10),
                width: moderateScale(18),
                height: moderateScale(18),
              }}
              source={require('../../assets/images/search.png')}
            />
            <TextInput
              placeholder="Search"
              style={{
                width: '80%',
                height: moderateScale(45),
                borderRadius: moderateScale(15),
                paddingStart: moderateScale(15),
                fontSize: moderateScale(18),
                color: colors.DARK_GREY,
              }}
            />
          </View>
          <TouchableOpacity
            style={{
              width: '15%',
              height: moderateScale(50),
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1.5,
              borderColor: colors.GREEN,
              borderRadius: moderateScale(15),
            }}>
            <Image
              style={{width: moderateScale(20), height: moderateScale(20)}}
              source={require('../../assets/images/filterr.png')}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginHorizontal: moderateScale(20),
            marginTop: moderateScale(10),
          }}>
          <Text
            style={{
              color: colors.DARK_GREY,
              fontSize: moderateScale(18),
              fontWeight: '500',
            }}>
            Categories
          </Text>
        </View>
        <View
          style={{
            marginTop: moderateScale(20),
            marginHorizontal: moderateScale(20),
          }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={categories}
            renderItem={({item}) => {
              return (
                <TouchableOpacity activeOpacity={0.8}>
                  <ImageBackground
                    style={{
                      width: moderateScale(60),
                      height: moderateScale(60),
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginHorizontal: moderateScale(10),
                    }}
                    source={item.bgImage}>
                    <Image
                      source={item.image}
                      style={{
                        width: moderateScale(40),
                        height: moderateScale(40),
                      }}
                    />
                  </ImageBackground>
                  <View
                    style={{
                      marginHorizontal: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginTop: moderateScale(8),
                    }}>
                    <Text style={{fontSize: scale(10), fontWeight: '400'}}>
                      {item.category}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>

        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={listings}
          ListHeaderComponent={() => (
            <View
              style={{
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(28),
                flexDirection: 'row',
              }}>
              <Text
                style={{
                  color: colors.DARK_GREY,
                  fontSize: moderateScale(16),
                  fontWeight: '500',
                  flex: 1,
                }}>
                Listings
              </Text>
              <Text
                style={{
                  color: colors.GREEN,
                  fontSize: moderateScale(12),
                  fontWeight: '500',
                }}>
                View All
              </Text>
            </View>
          )}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(routes.PRODUCT_DETAILS_SCREEN)
                }
                activeOpacity={0.7}
                style={{
                  height: moderateScale(200),
                  borderWidth: moderateScale(1),
                  marginVertical: moderateScale(5),
                  width: itemWidth,
                  borderRadius: moderateScale(10),
                  borderColor: colors.GREEN,
                  marginTop: moderateScaleVertical(10),
                }}>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Image
                    resizeMode="contain"
                    style={{
                      width: moderateScale(20),
                      height: moderateScale(20),
                      start: moderateScale(60),
                      top: moderateScale(8),
                    }}
                    source={require('../../assets/images/heart.png')}
                  />
                  <Image
                    style={{
                      marginStart: moderateScale(20),
                      marginTop: moderateScale(20),
                      marginEnd: moderateScale(20),
                    }}
                    source={item.image}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    top: moderateScale(26),
                    marginHorizontal: moderateScale(7),
                  }}>
                  <View style={{flex: 1}}>
                    <Text
                      style={{fontSize: scale(12), color: colors.DARK_GREY}}>
                      {item.title}
                    </Text>
                    <Text style={{fontSize: scale(8), color: colors.GREY}}>
                      {item.subTitle}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontSize: scale(16),
                      color: colors.GREEN,
                      alignSelf: 'flex-end',
                      fontWeight: 'bold',
                    }}>
                    {item.price}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
          columnWrapperStyle={styles.columnWrapper}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
