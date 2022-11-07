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
      <Button textDuButton="un button simple" />
    </View>
  );
}
export default App;
