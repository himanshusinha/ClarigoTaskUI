import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from '../constants/routes';
import {
  BottomNavigation,
  FavouriteScreen,
  HomeScreen,
  LoginScreen,
  OnBoardingScreen,
  ProductDetailsScreen,
  ProfileScreen,
  ShopScreen,
  SplashScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={routes.HOME_SCREEN} component={BottomNavigation} />
        <Stack.Screen
          name={routes.PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />
        <Stack.Screen
          name={routes.ON_BOARDING_SCREEN}
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name={routes.FAVOURITE_SCREEN}
          component={FavouriteScreen}
        />
        <Stack.Screen name={routes.SHOP_SCREEN} component={ShopScreen} />
        <Stack.Screen name={routes.PROFILE_SCREEN} component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
