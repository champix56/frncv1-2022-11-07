import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import ButtonStylesheet from './Button.styles';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight  testID="Button">
      <View style={ButtonStylesheet.Button}>
        <Text style={ButtonStylesheet.contentText}>{props.textDuButton}</Text>
      </View>
    </TouchableHighlight>
  );
};
export default Button;
