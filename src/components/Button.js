import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import Colors from '../common/Colors';

const Button = ({text, icon, bgColor, onPress, marginHorizontal}) => (
  <TouchableOpacity
    style={{
      backgroundColor: bgColor ? bgColor : Colors.primary,
      flexGrow: 1,
      height: 40,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: marginHorizontal,
    }}
    onPress={onPress}>
    <Text style={{color: 'white', fontSize: 14, fontWeight: 'bold'}}>
      {icon} {text}
    </Text>
  </TouchableOpacity>
);

export default Button;
