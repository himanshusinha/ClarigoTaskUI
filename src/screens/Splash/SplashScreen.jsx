import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {moderateScale} from '../../styles/responsiveSize';
import {useNavigation} from '@react-navigation/native';
import routes from '../../constants/routes';

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.replace(routes.ON_BOARDING_SCREEN);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigation]);
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#58AC2F', '#7CC446', '#A2DC5F']}
        start={{x: 1, y: 0}}
        end={{x: 0, y: 1}}
        style={styles.linearGradient}>
        <Image
          resizeMode="cover"
          style={{width: moderateScale(180), height: moderateScale(180)}}
          source={require('../../assets/images/doneone.png')}
        />
      </LinearGradient>
    </View>
  );
};

export default SplashScreen;
