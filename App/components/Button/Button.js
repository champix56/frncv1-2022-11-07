import React from 'react';
import {Text, TouchableHighlight} from 'react-native';
import ButtonStylesheet from './Button.styles';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight style={ButtonStylesheet.Button} testID="Button">
      <Text style={ButtonStylesheet.contentText}>{props.textDuButton}</Text>
    </TouchableHighlight>
  );
};
export default Button;
