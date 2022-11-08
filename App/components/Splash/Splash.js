import React from 'react';
import {Image, Text, View} from 'react-native';
import SplashStylesheet from './Splash.styles';
import {name as appName} from '../../../app.json';
const Splash = props => {
  return (
    <View style={SplashStylesheet.Splash} testID="Splash">
      <View style={SplashStylesheet.VerticalCenter}>
        <View style={SplashStylesheet.ImageContainer}>
          <Image
            style={SplashStylesheet.Image}
            source={{
              uri: 'https://w7.pngwing.com/pngs/79/518/png-transparent-js-react-js-logo-react-react-native-logos-icon-thumbnail.png',
            }}
          />
        </View>
      </View>
      <View style={SplashStylesheet.TitleContainer}>
        <Text style={SplashStylesheet.Title}>{appName}</Text>
      </View>
    </View>
  );
};
export default Splash;
