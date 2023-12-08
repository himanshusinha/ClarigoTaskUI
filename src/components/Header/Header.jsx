import {Image, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const Header = ({title, leftImage, rightImage, onPress, onPressOut}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPressOut={onPressOut}>
        <Image source={leftImage} style={styles.leftButtonImage} />
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={rightImage} style={styles.rightButtonImage} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
