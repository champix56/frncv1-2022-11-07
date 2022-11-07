import React from 'react';
import {Text, View} from 'react-native';
import AppStylesheet from './App.styles';

function App(props) {
  return (
    <View>
      <Text style={{...AppStylesheet.textBlue, ...AppStylesheet.underline}}>
        DEMAT BREIZH
      </Text>
    </View>
  );
}
export default App;
