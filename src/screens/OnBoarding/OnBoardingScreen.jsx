import {
  View,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import WrapperContainer from '../../components/Wrapper/WrapperContainer';
import {onBoardingData} from '../../constants/list';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import AppButton from '../../components/Button/AppButton';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const OnBoardingScreen = () => {
  const {height, width} = Dimensions.get('window');
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const aspectRatio = 1; // Set to 1 for equal width and height
  const imageWidth = width;
  const imageHeight = imageWidth * aspectRatio;
  const [data, setData] = useState(onBoardingData);
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.mainStyle}>
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
                    height: height,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.WHITE,
                  }}>
                  <TouchableOpacity
                    disabled={true}
                    style={{
                      width: '100%',
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'center',
                      bottom: moderateScaleVertical(10),
                    }}>
                    <Image
                      style={{
                        width: '90%',
                        height: moderateScale(500),
                      }}
                      resizeMode="contain"
                      source={item.image}
                    />
                  </TouchableOpacity>
                  <View
                    style={{
                      bottom: moderateScale(140),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(28),
                        textAlign: 'center',
                        color: colors.GREEN,
                        fontWeight: 'bold',
                      }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      bottom: moderateScale(130),
                      marginHorizontal: moderateScale(20),
                      marginVertical: moderateScale(10),
                    }}>
                    <Text
                      style={{
                        fontSize: scale(16),
                        textAlign: 'center',
                        color: colors.DARK_GREY,
                        bottom: moderateScaleVertical(10),
                      }}>
                      {item.subTitle}
                    </Text>
                  </View>
                </View>
              );
            }}
          />

          <View
            style={{
              bottom: moderateScale(80),
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 10,
            }}>
            {data.map((item, index) => {
              return (
                <View
                  key={item.id}
                  style={{
                    width: currentIndex == index ? 40 : 8,
                    height: currentIndex == index ? 10 : 8,
                    borderRadius: currentIndex == index ? 5 : 4,
                    backgroundColor:
                      currentIndex == index
                        ? colors.GREEN
                        : colors.SECONDARY_GREY,
                    marginLeft: moderateScale(5),
                  }}
                />
              );
            })}
          </View>
        </View>
      </View>

      <View style={styles.bottomView}>
        <AppButton
          onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
          title={'Get Started'}
          titleStyle={{
            color: colors.WHITE,
            fontSize: scale(16),
            fontWeight: 'bold',
          }}
          style={{
            marginHorizontal: 20,
            backgroundColor: colors.GREEN,
            bottom: moderateScale(100),
            justifyContent: 'center',
            alignItems: 'center',
            height: moderateScale(50),
            borderRadius: moderateScale(30),
          }}
        />
      </View>
    </View>
  );
};

export default OnBoardingScreen;
