import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import routes from '../constants/routes';
import {HomeScreen, ProductDetailsScreen} from '../screens';

const Stack = createNativeStackNavigator();

const HomeNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={routes.HOME_SCREEN} component={HomeScreen} />
      <Stack.Screen
        name={routes.PRODUCT_DETAILS_SCREEN}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
export default HomeNavigation;
