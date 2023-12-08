import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text, View} from 'react-native';
import routes from '../constants/routes';
import colors from '../constants/colors';
import images from '../constants/images';
import styles from './styles';
import {
  FavouriteScreen,
  HomeScreen,
  ProfileScreen,
  ShopScreen,
} from '../screens';
import {moderateScale, scale} from '../styles/responsiveSize';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={routes.HOME_SCREEN}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.BLACK,
        tabBarInactiveTintColor: colors.GRAY,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          backgroundColor: colors.WHITE,
          height: moderateScale(80),
        },
      }}>
      {/* Home TabBar */}
      <Tab.Screen
        name={routes.HOME_NAVIGATION}
        component={HomeNavigation}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  backgroundColor: focused ? colors.WHITE : null,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Image
                style={[
                  styles.imageHomeStyle,
                  {tintColor: focused ? colors.GREEN : colors.GREY},
                ]}
                source={require('../assets/images/homee.png')}
              />
              <Text
                style={{
                  fontSize: scale(12),
                  color: focused ? colors.GREEN : colors.GREY,
                  top: moderateScale(5),
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />

      {/* Upload TabBar */}
      <Tab.Screen
        name={routes.FAVOURITE_SCREEN}
        component={FavouriteScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  backgroundColor: focused ? colors.WHITE : null,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Image
                style={[
                  styles.imageStyle,
                  {tintColor: focused ? colors.GREEN : colors.GRAY},
                ]}
                source={require('../assets/images/Star.png')}
              />
              <Text
                style={{
                  fontSize: scale(12),
                  color: focused ? colors.GREEN : colors.GREY,
                  top: moderateScale(5),
                }}>
                Favourite
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={routes.SHOP_SCREEN}
        component={ShopScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  backgroundColor: focused ? colors.WHITE : null,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Image
                style={[
                  styles.imageStyle,
                  {tintColor: focused ? colors.GREEN : colors.GRAY},
                ]}
                source={require('../assets/images/Shop.png')}
              />
              <Text
                style={{
                  fontSize: scale(12),
                  color: focused ? colors.GREEN : colors.GREY,
                  top: moderateScale(5),
                }}>
                Shop
              </Text>
            </View>
          ),
        }}
      />
      {/* Profile TabBar */}
      <Tab.Screen
        name={routes.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  backgroundColor: focused ? colors.WHITE : null,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
              <Image
                style={[
                  styles.imageStyle,
                  {tintColor: focused ? colors.GREEN : colors.GRAY},
                ]}
                source={require('../assets/images/UserProfile.png')}
              />
              <Text
                style={{
                  fontSize: scale(12),
                  color: focused ? colors.GREEN : colors.GREY,
                  top: moderateScale(5),
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
