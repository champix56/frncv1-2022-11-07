import React from 'react';
import {Text, TouchableHighlight, View} from 'react-native';
import ButtonStylesheet from './Button.styles';

const Button = props => {
  console.log(props);
  return (
    <TouchableHighlight style={ButtonStylesheet.Button} testID="Button">
      {props.children}
    </TouchableHighlight>
  );
};
export default Button;
