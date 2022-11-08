import React from 'react';
import {Pressable, Text, View} from 'react-native';
import ButtonClassStylesheet from './ButtonClass.styles';

class ButtonClass extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      values: [1, 2, 3],
      isClicked: false,
    };
  }
  componentDidUpdate() {
    if (this.state.isClicked) {
      setTimeout(() => {
        this.setState({isClicked: false});
      }, 1000);
    }
  }
  render() {
    return (
      <Pressable
        testID="ButtonClass"
        onPress={() => {
          this.setState({isClicked: true});
          this.props.onPress();
        }}>
        {!this.state.isClicked ? (
          <View
            style={{
              ...ButtonClassStylesheet.ButtonClass,
              backgroundColor: 'grey',
            }}
            testID="ButtonClass">
            {this.props.children}
          </View>
        ) : (
          <Text>click en cours</Text>
        )}
      </Pressable>
    );
  }
}
export default ButtonClass;
