import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import ButtonStylesheet from './Button.styles';

const Button = props => {
  return (
    <TouchableHighlight style={ButtonStylesheet.Button} testID="Button">
      <Text style={ButtonStylesheet.contentText}>button</Text>
    </TouchableHighlight>
  );
};
export default Button;
