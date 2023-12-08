import {
  View,
  ImageBackground,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {
  moderateScale,
  moderateScaleVertical,
  scale,
  verticalScale,
} from '../../styles/responsiveSize';
import colors from '../../constants/colors';
import InputField from '../../components/Input/InputField';
import AppButton from '../../components/Button/AppButton';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={require('../../assets/images/header.png')}
          style={styles.imgStyle}>
          <Image
            style={{
              width: moderateScale(140),
              height: moderateScale(140),
              bottom: moderateScaleVertical(30),
            }}
            source={require('../../assets/images/don.png')}
          />
        </ImageBackground>

        <View style={styles.mainStyle}>
          <View
            onPress={() => navigation.navigate(routes.HOME_SCREEN)}
            style={{marginTop: moderateScale(10)}}>
            <Text
              style={{
                fontSize: scale(28),
                fontWeight: '600',
                color: colors.GREEN,
                bottom: moderateScaleVertical(50),
              }}>
              Login
            </Text>
          </View>
          <View
            style={{marginTop: moderateScale(10), bottom: moderateScale(48)}}>
            <Text
              style={{
                fontSize: scale(22),
                color: colors.DARK_GREY,
              }}>
              Welcome back
            </Text>
          </View>
          <View
            style={{
              width: '90%',
              borderRadius: 40,
              height: moderateScale(55),
              justifyContent: 'center',
              paddingStart: moderateScale(5),
              borderColor: colors.GREY_PRIMARY,
              borderWidth: 1,
              backgroundColor: colors.WHITE_BG,
              bottom: moderateScale(15),
            }}>
            <InputField
              leftIcon={require('../../assets/images/email.png')}
              placeholder={'Email/User Name'}
              placeholderTextColor={colors.GREY}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </View>

          <View
            style={{
              width: '90%',
              borderRadius: 40,
              height: moderateScale(55),
              justifyContent: 'center',
              paddingStart: moderateScale(5),
              borderColor: colors.GREY_PRIMARY,
              borderWidth: 1,
              backgroundColor: colors.WHITE_BG,
              marginVertical: moderateScale(15),
              bottom: moderateScale(10),
            }}>
            <InputField
              rightIcon={require('../../assets/images/Show.png')}
              leftIcon={require('../../assets/images/lock.png')}
              placeholder={'Password'}
              placeholderTextColor={colors.GREY}
              autoCapitalize={'none'}
              autoCorrect={false}
            />
          </View>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              width: '90%',
              bottom: moderateScale(12),
            }}>
            <Text style={{fontSize: scale(14), color: colors.GREY}}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AppButton
            onPress={() => navigation.navigate(routes.HOME_SCREEN)}
            style={{
              width: '50%',
              backgroundColor: colors.GREEN,
              borderRadius: moderateScale(25),
              justifyContent: 'center',
              alignItems: 'center',
              height: moderateScale(50),
              elevation: 5, // Set elevation for Android
              shadowColor: colors.DARK_GREY, // Set shadow color for iOS
              shadowOffset: {width: 0, height: 2}, // Set shadow offset for iOS
              shadowOpacity: 0.7, // Set shadow opacity for iOS
              shadowRadius: 2.5,
              top: moderateScale(20),

              // Set shadow radius for iOS
            }}
            titleStyle={{
              fontSize: scale(16),
              fontWeight: 'bold',
              color: colors.WHITE,
            }}
            title="LOGIN"
          />
        </View>
      </View>

      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          paddingVertical: verticalScale(70),
          flex: 1,
        }}>
        <Image
          resizeMode="center"
          style={{width: moderateScale(120), height: moderateScale(60)}}
          source={require('../../assets/images/social.png')}
        />
      </View>
      <View style={styles.bottomView}>
        <Text style={{fontSize: scale(16), color: colors.GREY}}>
          Don't have an account ?{' '}
        </Text>
        <TouchableOpacity onPress={() => {}}>
          <Text
            style={{
              fontSize: scale(16),
              color: colors.GREEN,
              fontWeight: 'bold',
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
