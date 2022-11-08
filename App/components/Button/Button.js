import React from 'react';
import {Pressable, Text, TouchableHighlight, View} from 'react-native';
import ButtonStylesheet from './Button.styles';

const Button = props => {
  console.log(props);
  return (
    <Pressable testID="Button" onPress={props.onPress}>
      <View style={ButtonStylesheet.Button}>{props.children}</View>
    </Pressable>
  );
};
export default Button;
