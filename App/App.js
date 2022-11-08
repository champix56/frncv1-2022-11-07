import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import AppStylesheet from './App.styles';
import Button from './components/Button/Button';

function App(props) {
  const [counter, setcounter] = useState(0);
  useEffect(() => {
    console.log('avec effet', counter);
  }, [counter]);
  return (
    <View>
      <Text
        style={{
          ...AppStylesheet.textBlue,
          ...AppStylesheet.underline,
          textAlign: 'center',
        }}>
        Value du compteur : {counter}
      </Text>
      <Button
        onPress={qqch => {
          setcounter(counter + 1);
          console.log(counter);
        }}>
        <Text style={AppStylesheet.buttonContent}>add</Text>
      </Button>
    </View>
  );
}
export default App;
