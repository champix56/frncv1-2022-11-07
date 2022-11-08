import React from 'react';
import {Text, View} from 'react-native';
import AppStylesheet from './App.styles';
import Button from './components/Button/Button';

function App(props) {
  return (
    <View>
      <Text style={{...AppStylesheet.textBlue, ...AppStylesheet.underline}}>
        DEMAT BREIZH
      </Text>
      <Button
        onPress={qqch => {
          console.log(qqch);
        }}>
        <Text style={AppStylesheet.buttonContent}>sdfhgjjkijuhygts</Text>
      </Button>
    </View>
  );
}
export default App;
