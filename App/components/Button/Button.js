import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import ButtonStylesheet from './Button.styles';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight testID="Button">
      <View style={ButtonStylesheet.Button}>{props.children}</View>
    </TouchableHighlight>
  );
};
export default Button;
