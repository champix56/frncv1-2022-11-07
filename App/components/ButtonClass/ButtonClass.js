import React from 'react';
import {Pressable, View} from 'react-native';
import ButtonClassStylesheet from './ButtonClass.styles';

class ButtonClass extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Pressable
        testID="ButtonClass"
        onPress={() => {
          this.props.onPress();
        }}>
        <View style={ButtonClassStylesheet.ButtonClass} testID="ButtonClass">
          {this.props.children}
        </View>
      </Pressable>
    );
  }
}
export default ButtonClass;
