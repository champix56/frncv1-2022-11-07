import {StyleSheet} from 'react-native';

const SplashStylesheet = StyleSheet.create({
  Splash: {backgroundColor: 'skyblue', flexGrow: 1},
  VerticalCenter: {
    height: '50%',
    justifyContent: 'center',
  },
  ImageContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  Image: {
    height: 50,
    width: 50,
  },
  TitleContainer: {marginTop: '15%'},
  Title: {
    margin: 25,
    fontSize: 24,
    color: 'white',
    fontWeight: '900',
    textAlign: 'center',
  },
});
export default SplashStylesheet;
